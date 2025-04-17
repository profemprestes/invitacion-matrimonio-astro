import re
import os
from typing import List, Dict, Tuple
from pathlib import Path

class TypeScriptFixer:
    def __init__(self, project_root: str, log_file: str):
        self.project_root = Path(project_root)
        self.log_file = Path(log_file)
        self.modified_files: Dict[str, List[str]] = {}
        self.import_fixes: Dict[str, List[Tuple[str, str]]] = {}
        
    def parse_log_file(self) -> None:
        # Try different encodings
        encodings = ['utf-8-sig', 'utf-16', 'utf-8', 'cp1252', 'latin1']
        content = None
        
        for encoding in encodings:
            try:
                with open(self.log_file, 'r', encoding=encoding) as f:
                    content = f.read()
                    break
            except UnicodeDecodeError:
                continue
            except Exception as e:
                print(f"Error with {encoding}: {e}")
                continue
        
        if content is None:
            try:
                # Try binary read as fallback
                with open(self.log_file, 'rb') as f:
                    content = f.read().decode('utf-8', errors='ignore')
            except Exception as e:
                print(f"Error reading file: {e}")
                return

        try:
            # Parse type errors (ts7006 and ts7031)
            type_errors = re.finditer(r'\[96msrc/([^:]+\.tsx?)\[0m.*?ts\(70(?:06|31)\).*?\'(\w+)\' implicitly has', content, re.DOTALL)
            for match in type_errors:
                file_path = f"src/{match.group(1)}"
                if file_path not in self.modified_files:
                    self.modified_files[file_path] = []
                param_name = match.group(2)
                self.modified_files[file_path].append(f"Add type 'any' to parameter '{param_name}'")

            # Parse import errors (ts2307)
            import_errors = re.finditer(r'\[96msrc/([^:]+\.tsx?)\[0m.*?Cannot find module \'([^\']+)\'', content, re.DOTALL)
            for match in import_errors:
                file_path = f"src/{match.group(1)}"
                module_name = match.group(2)
                if file_path not in self.import_fixes:
                    self.import_fixes[file_path] = []
                self.import_fixes[file_path].append((module_name, self.find_correct_import_path(module_name)))

        except Exception as e:
            print(f"Error parsing log file: {e}")
            return

    def find_correct_import_path(self, module_name: str) -> str:
        clean_name = module_name.replace('./', '')
        file_name = clean_name.split('/')[-1]
        
        # Search in components and modals directories
        search_paths = ['components', 'components/modals', 'components/cards']
        for search_path in search_paths:
            full_path = self.project_root / 'src' / search_path / f"{file_name}.tsx"
            if full_path.exists():
                return f'@/{search_path}/{file_name}'
        
        return module_name

    def fix_file(self, file_path: str) -> None:
        abs_path = self.project_root / file_path
        if not abs_path.exists():
            return

        with open(abs_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Fix type annotations for event handlers
        content = re.sub(
            r'const\s+(\w+)\s*=\s*(\w+)\s*=>\s*{',
            r'const \1 = (\2: any) => {',
            content
        )

        # Fix type annotations for destructured props
        content = re.sub(
            r'const\s+\w+\s*=\s*\({\s*([\w\s,]+)\s*}\)\s*=>\s*{',
            lambda m: 'const ' + m.group(0).split("=")[0].strip() + ' = ({ ' + 
                     ', '.join(f'{p.strip()}: any' for p in m.group(1).split(',')) + 
                     ' }) => {',
            content
        )

        # Fix imports
        if file_path in self.import_fixes:
            for module_name, new_path in self.import_fixes[file_path]:
                content = re.sub(
                    f"from '[^']*{module_name}'",
                    f"from '{new_path}'",
                    content
                )

        # Remove unused React imports
        content = re.sub(
            r'import React,\s*({[^}]+})\s*from\s*\'react\';',
            r'import \1 from \'react\';',
            content
        )

        with open(abs_path, 'w', encoding='utf-8') as f:
            f.write(content)

    def run(self) -> None:
        print("Starting TypeScript error fixes...")
        self.parse_log_file()
        
        files_modified = 0
        for file_path in set(list(self.modified_files.keys()) + list(self.import_fixes.keys())):
            print(f"\nProcessing {file_path}...")
            self.fix_file(file_path)
            files_modified += 1
            
            if file_path in self.modified_files:
                print("Applied fixes:")
                for fix in self.modified_files[file_path]:
                    print(f"  - {fix}")
            
            if file_path in self.import_fixes:
                print("Fixed imports:")
                for module_name, new_path in self.import_fixes[file_path]:
                    print(f"  - Updated import path for {module_name} to {new_path}")

        print(f"\nComplete! Modified {files_modified} files.")

if __name__ == "__main__":
    project_root = r"G:\01-Galia\Nueva carpeta\invitacion-matrimonio-astro"
    log_file = os.path.join(project_root, "pnpm_check_output.txt")
    
    fixer = TypeScriptFixer(project_root, log_file)
    fixer.run()