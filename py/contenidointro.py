import os
from pathlib import Path

def read_file_content(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            return file.read()
    except Exception as e:
        return f"Error reading file {file_path}: {str(e)}"

def find_imports_and_css(content):
    imports = []
    lines = content.split('\n')
    for line in lines:
        if 'import' in line or '.css' in line:
            # Clean up the line
            clean_line = line.strip().replace("'", "").replace('"', "")
            if '@/' in clean_line:
                # Handle aliased imports
                path = clean_line.split('@/')[1].split(';')[0].split(' ')[0]
                imports.append(f"src/{path}")
            elif '../' in clean_line:
                # Handle relative imports
                path = clean_line.split("../")[1].split(';')[0].split(' ')[0]
                imports.append(path)
            elif 'import' in clean_line and '/' in clean_line:
                # Handle direct imports
                path = clean_line.split('from ')[1].split(';')[0].strip()
                imports.append(path)
    return imports

def resolve_css_path(base_path, css_path):
    # Try different possible CSS file locations
    possible_paths = [
        os.path.join(base_path, css_path),
        os.path.join(base_path, 'src', css_path),
        os.path.join(base_path, 'src', 'styles', css_path),
        os.path.join(base_path, 'src', 'styles', 'css', css_path)
    ]
    
    for path in possible_paths:
        if os.path.exists(path):
            return path
    return None

def process_file(base_path, file_path, processed_files, output_content):
    if file_path in processed_files:
        return

    processed_files.add(file_path)
    
    try:
        content = read_file_content(file_path)
        output_content.append(f"\n{'='*50}")
        output_content.append(f"File: {file_path}")
        output_content.append('='*50)
        output_content.append(content)

        # Find imports and CSS references
        imports = find_imports_and_css(content)
        for import_path in imports:
            full_path = os.path.normpath(os.path.join(base_path, import_path))
            
            # Handle CSS files
            if import_path.endswith('.css'):
                css_path = resolve_css_path(base_path, import_path)
                if css_path and css_path not in processed_files:
                    process_file(base_path, css_path, processed_files, output_content)
                continue

            # Handle regular imports
            if os.path.exists(full_path):
                process_file(base_path, full_path, processed_files, output_content)
            
            # Check for .tsx files if .ts doesn't exist
            if not os.path.exists(full_path) and full_path.endswith('.ts'):
                tsx_path = full_path + 'x'
                if os.path.exists(tsx_path):
                    process_file(base_path, tsx_path, processed_files, output_content)

    except Exception as e:
        output_content.append(f"Error processing {file_path}: {str(e)}")

def main():
    # Set up paths
    base_path = r"G:\01-Galia\Nueva carpeta\invitacion-matrimonio-astro"
    intro_path = os.path.join(base_path, "src", "sections", "Intro.astro")
    output_dir = os.path.join(base_path, "txt")
    output_file = os.path.join(output_dir, "intro_related_files.txt")

    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)

    # Process files
    processed_files = set()
    output_content = []
    
    process_file(base_path, intro_path, processed_files, output_content)

    # Write output
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write('\n'.join(output_content))
        print(f"Content has been written to {output_file}")
    except Exception as e:
        print(f"Error writing output file: {str(e)}")

if __name__ == "__main__":
    main()