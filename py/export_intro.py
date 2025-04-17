# export_intro.py

# Rutas de los archivos de entrada
intro_astro_path = r"G:\01-Galia\Nueva carpeta\invitacion-matrimonio-astro\src\sections\Intro.astro"
intro_gallery_path = r"G:\01-Galia\Nueva carpeta\invitacion-matrimonio-astro\src\components\IntroGallery.tsx"
intro_css_path = r"G:\01-Galia\Nueva carpeta\invitacion-matrimonio-astro\src\styles\css\sections\Intro.css"

# Ruta del archivo de salida
output_path = r"G:\01-Galia\Nueva carpeta\invitacion-matrimonio-astro\intro_completo.txt"

# Función para leer el contenido de un archivo
def read_file(path):
    try:
        with open(path, "r", encoding="utf-8") as f:
            return f.read()
    except FileNotFoundError:
        return f"[ERROR] No se encontró el archivo: {path}\n"

# Leer contenidos
intro_astro_content = read_file(intro_astro_path)
intro_gallery_content = read_file(intro_gallery_path)
intro_css_content = read_file(intro_css_path)

# Combinar en un solo texto
full_content = (
    "===== Intro.astro =====\n\n"
    + intro_astro_content
    + "\n\n===== IntroGallery.tsx =====\n\n"
    + intro_gallery_content
    + "\n\n===== Intro.css =====\n\n"
    + intro_css_content
)

# Escribir el contenido en un archivo .txt
with open(output_path, "w", encoding="utf-8") as out_file:
    out_file.write(full_content)

print(f"✅ Contenido exportado correctamente a:\n{output_path}")
