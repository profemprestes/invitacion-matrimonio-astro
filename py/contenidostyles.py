from pathlib import Path

# Definir el directorio de donde sacar los CSS
styles_dir = Path(r"G:\01-Galia\Nueva carpeta\invitacion-matrimonio-astro\src\styles")

# Definir el archivo de salida
output_py = Path(r"G:\01-Galia\Nueva carpeta\invitacion-matrimonio-astro\src\css_files_dump.py")

# Asegurarse que la carpeta donde vamos a escribir existe
output_py.parent.mkdir(parents=True, exist_ok=True)

# Cargar todo el contenido de los .css
css_files_content = {}

for css_file in styles_dir.glob("*.css"):
    with open(css_file, "r", encoding="utf-8") as f:
        css_files_content[css_file.name] = f.read()

# Escribir el contenido en un .py
with open(output_py, "w", encoding="utf-8") as f:
    f.write("# Archivo generado automáticamente\n\n")
    f.write("css_files = {\n")
    for name, content in css_files_content.items():
        safe_content = content.replace('"""', r'\"\"\"')  # escapamos triples comillas
        f.write(f'    "{name}": """{safe_content}""",\n')
    f.write("}\n")

print(f"Archivo generado: {output_py}")
