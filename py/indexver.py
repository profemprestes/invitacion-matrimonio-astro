import os
import re

# Configuraciones iniciales
INDEX_FILE = "src/pages/index.astro"  # Ruta a tu index.astro
SECTIONS_DIR = "src/sections"          # Ruta a las secciones
LAYOUTS_DIR = "src/layouts"             # Ruta a layouts
OUTPUT_FILE = "contenido_completo.txt" # Archivo de salida

# Función para leer archivo
def read_file(file_path):
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()
    else:
        print(f"⚠️ Archivo no encontrado: {file_path}")
        return f"// Archivo no encontrado: {file_path}\n"

# Función principal
def extract_content():
    result = []

    # Leer index.astro
    index_content = read_file(INDEX_FILE)
    result.append("// === index.astro ===\n")
    result.append(index_content + "\n")

    # Buscar imports
    imports = re.findall(r'import\s+(\w+)\s+from\s+"@/([^"]+)"', index_content)
    print(f"🔎 Encontrados {len(imports)} imports en index.astro")

    for name, path in imports:
        # Resolver el path real
        if path.startswith("sections/"):
            component_path = os.path.join(SECTIONS_DIR, os.path.basename(path))
        elif path.startswith("layouts/"):
            component_path = os.path.join(LAYOUTS_DIR, os.path.basename(path))
        else:
            print(f"❓ Import no reconocido: {name} from {path}")
            continue

        # Agregar extensión si falta
        if not component_path.endswith('.astro') and not component_path.endswith('.tsx'):
            component_path += ".astro"

        # Leer componente
        content = read_file(component_path)
        result.append(f"\n// === {path} ===\n")
        result.append(content + "\n")

    # Guardar en archivo txt
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.writelines(result)

    print(f"\n✅ Contenido combinado exportado a {OUTPUT_FILE}")

if __name__ == "__main__":
    extract_content()
