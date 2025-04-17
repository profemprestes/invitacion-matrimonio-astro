import os
from pathlib import Path

def read_file_content(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            return file.read()
    except Exception as e:
        return f"Error reading file {file_path}: {str(e)}"

def process_root_files():
    base_path = r"G:\01-Galia\Nueva carpeta\invitacion-matrimonio-astro"
    output_dir = os.path.join(base_path, "txt")
    output_file = os.path.join(output_dir, "root_files_content.txt")
    names_file = os.path.join(output_dir, "root_files_names.txt")
    
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    output_content = []
    file_names = []
    
    # Get all files in root directory
    for item in os.listdir(base_path):
        full_path = os.path.join(base_path, item)
        
        # Skip if it's a directory, .py file, or .txt file
        if (os.path.isdir(full_path) or 
            item.endswith('.py') or 
            item.endswith('.txt')):
            continue
            
        # Add file name to the list
        file_names.append(item)
            
        # Process file content
        try:
            content = read_file_content(full_path)
            output_content.append(f"\n{'='*50}")
            output_content.append(f"File: {item}")
            output_content.append('='*50)
            output_content.append(content)
            
        except Exception as e:
            output_content.append(f"Error processing {item}: {str(e)}")
    
    # Write full content output
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write('\n'.join(output_content))
        print(f"Content has been written to {output_file}")
    except Exception as e:
        print(f"Error writing content file: {str(e)}")

    # Write file names output
    try:
        with open(names_file, 'w', encoding='utf-8') as f:
            f.write('\n'.join(sorted(file_names)))
        print(f"File names have been written to {names_file}")
    except Exception as e:
        print(f"Error writing names file: {str(e)}")

if __name__ == "__main__":
    process_root_files()