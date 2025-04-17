import os

def list_specific_files_and_contents(root_dir, output_file, target_files):
    with open(output_file, 'w', encoding='utf-8') as f:
        for file in target_files:
            file_path = os.path.join(root_dir, file)
            if os.path.isfile(file_path):
                f.write(f"File: {file_path}\n")
                f.write("Contents:\n")
                try:
                    with open(file_path, 'r', encoding='utf-8') as file_content:
                        f.write(file_content.read())
                except UnicodeDecodeError:
                    f.write("[Unable to read file with UTF-8 encoding]\n")
                f.write("\n\n")

if __name__ == "__main__":
    root_directory = "g:\\01-Galia\\Nueva carpeta\\invitacion-matrimonio-astro"
    output_txt = "project_files_contents.txt"
    target_files = [
        '.gitignore',
        'astro.config.mjs',
        'package.json',
        'pnpm-lock.yaml',
        'pnpm-workspace.yaml',
        'tailwind.config.mjs',
        'tsconfig.json',
        'env.d.ts'
    ]
    list_specific_files_and_contents(root_directory, output_txt, target_files)