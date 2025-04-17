import os
import shutil
from pathlib import Path

def create_directory_structure(base_path):
    """Crea una estructura de directorios optimizada"""
    
    # Definir nueva estructura
    new_structure = {
        "src": {
            "components": {
                "ui": {},           # Componentes de UI básicos
                "modals": {},       # Modales separados
                "cards": {},        # Tarjetas y elementos similares
                "layout": {},       # Componentes de layout
                "media": {},        # Componentes relacionados con media
                "forms": {},        # Componentes de formularios
            },
            "layouts": {},          # Layouts Astro
            "pages": {},            # Páginas Astro
            "sections": {},         # Secciones de página
            "styles": {
                "base": {},         # Estilos base
                "components": {},   # Estilos de componentes
                "sections": {},     # Estilos de secciones
                "utils": {},        # Utilidades CSS
            },
            "utils": {},            # Funciones de utilidad
            "data": {},             # Datos y estado
            "assets": {
                "icons": {},        # Iconos
                "images": {},       # Imágenes
                "fonts": {},        # Fuentes
            },
            "types": {},            # Definiciones de tipos
        }
    }
    
    # Crear estructura
    for dir_path, subdirs in _flatten_dict(new_structure):
        full_path = os.path.join(base_path, dir_path)
        os.makedirs(full_path, exist_ok=True)
        print(f"Creado directorio: {full_path}")

def _flatten_dict(d, parent_key=''):
    """Convierte un diccionario anidado en una lista de rutas"""
    items = []
    for k, v in d.items():
        new_key = f"{parent_key}/{k}" if parent_key else k
        if isinstance(v, dict) and v:
            items.append((new_key, v))
            items.extend(_flatten_dict(v, new_key))
        else:
            items.append((new_key, v))
    return items

def move_files(src_path):
    """Mueve los archivos a la nueva estructura"""
    
    # Mapeo de archivos a su nueva ubicación
    file_mappings = {
        # Componentes UI
        "src/components/Card.astro": "src/components/ui/Card.astro",
        "src/components/Divider.astro": "src/components/ui/Divider.astro",
        "src/components/Loader.jsx": "src/components/ui/Loader.jsx",
        "src/components/Title.astro": "src/components/ui/Title.astro",
        
        # Modales
        "src/components/AsistenciaModal.tsx": "src/components/modals/AsistenciaModal.tsx",
        "src/components/DressCodeModal.jsx": "src/components/modals/DressCodeModal.jsx",
        "src/components/MensajeModal.tsx": "src/components/modals/MensajeModal.tsx",
        "src/components/MensajesmostrarModal.jsx": "src/components/modals/MensajesmostrarModal.jsx",
        "src/components/Sobremimodal.tsx": "src/components/modals/Sobremimodal.tsx",
        "src/components/TipsModal.jsx": "src/components/modals/TipsModal.jsx",
        "src/components/MusicaModal copy.jsx": "src/components/modals/MusicaModal.jsx",
        
        # Cards
        "src/components/CardParty.tsx": "src/components/cards/CardParty.tsx",
        "src/components/MessageCard.astro": "src/components/cards/MessageCard.astro",
        
        # Media
        "src/components/ControlMusic.jsx": "src/components/media/ControlMusic.jsx",
        "src/components/IntroGallery.tsx": "src/components/media/IntroGallery.tsx",
        
        # Componentes especiales 
        "src/components/intro.jsx": "src/components/sections/Intro.jsx",
        "src/components/MotionIntro.tsx": "src/components/sections/MotionIntro.tsx",
        "src/components/MessageRegistroAsistencia.jsx": "src/components/forms/MessageRegistroAsistencia.jsx",
        
        # Iconos
        "src/icons/IconPlayMusic.astro": "src/assets/icons/IconPlayMusic.astro",
        "src/icons/IconStopMusic.astro": "src/assets/icons/IconStopMusic.astro",
        "src/icons/InstagramIcon.astro": "src/assets/icons/InstagramIcon.astro",
        
        # CSS de componentes
        "src/components/CardParty.module.css": "src/styles/components/CardParty.module.css",
        
        # Estilos
        "src/styles/animations.css": "src/styles/base/animations.css",
        "src/styles/base.css": "src/styles/base/base.css",
        "src/styles/variables.css": "src/styles/base/variables.css",
        
        # Estilos de componentes
        "src/styles/AsistenciaModal.css": "src/styles/components/AsistenciaModal.css",
        "src/styles/CardParty.css": "src/styles/components/CardParty.css",
        "src/styles/DressCodeModal.css": "src/styles/components/DressCodeModal.css",
        "src/styles/MensajeModal.css": "src/styles/components/MensajeModal.css",
        "src/styles/MensajesmostrarModal.css": "src/styles/components/MensajesmostrarModal.css",
        "src/styles/Sobremimodal.css": "src/styles/components/Sobremimodal.css",
        "src/styles/introgallery.css": "src/styles/components/IntroGallery.css",
        
        # Estilos de secciones
        "src/styles/Countdown.css": "src/styles/sections/Countdown.css",
        "src/styles/PrincipalDate.css": "src/styles/sections/PrincipalDate.css",
        "src/styles/about.css": "src/styles/sections/About.css",
        "src/styles/contact.css": "src/styles/sections/Contact.css",
        "src/styles/hero.css": "src/styles/sections/Hero.css",
        "src/styles/intro.css": "src/styles/sections/Intro.css",
        "src/styles/party.css": "src/styles/sections/Party.css",
        
        # Estilos generales
        "src/styles/home.css": "src/styles/base/Home.css",
        "src/styles/index.css": "src/styles/base/Index.css",
        "src/styles/layout.css": "src/styles/base/Layout.css",
        
        # Utils
        "src/utils/animaciones.ts": "src/utils/animations.ts",
        "src/utils/countdown.ts": "src/utils/countdown.ts",
        "src/utils/IntroGallery.ts": "src/utils/introGallery.ts",
        
        # Tipos
        "src/env.d.ts": "src/types/env.d.ts",
        
        # Datos
        "src/data/Datos - Confirmacion.csv": "src/data/confirmacion.csv",
        "src/data/Datos - Datos.csv": "src/data/invitados.csv",
    }
    
    # CSS recursivos (de subcarpetas)
    css_files = {
        "src/styles/css/global.css": "src/styles/base/global.css",
        "src/styles/css/index.css": "src/styles/base/index.css",
        "src/styles/css/loader.css": "src/styles/components/loader.css",
        "src/styles/css/components/buttons.css": "src/styles/components/buttons.css",
        "src/styles/css/components/footer.css": "src/styles/components/footer.css",
        "src/styles/css/components/Gallery.css": "src/styles/components/gallery.css",
        "src/styles/css/components/navbar.css": "src/styles/components/navbar.css",
        "src/styles/css/sections/Countdown.css": "src/styles/sections/countdown.css",
        "src/styles/css/sections/Hero.css": "src/styles/sections/hero.css",
        "src/styles/css/sections/Intro.css": "src/styles/sections/intro.css",
        "src/styles/css/sections/Party.css": "src/styles/sections/party.css",
        "src/styles/css/sections/PrincipalDate.css": "src/styles/sections/principalDate.css",
    }
    
    # Añadir CSS a los mappings
    file_mappings.update(css_files)
    
    # Archivos a mantener en su ubicación actual
    keep_files = [
        "src/pages/index.astro",
        "src/layouts/Layout.astro",
        "src/sections/Countdown.astro",
        "src/sections/Footer.astro",
        "src/sections/Hero.astro",
        "src/sections/Instagram.astro",
        "src/sections/Intro.astro",
        "src/sections/Message.astro",
        "src/sections/Party.astro",
        "src/sections/PrincipalDate.astro",
    ]
    
    # Realizar copia de archivos
    failed_copies = []
    for src_file, dest_file in file_mappings.items():
        src_path_full = os.path.join(src_path, src_file)
        dest_path_full = os.path.join(src_path, dest_file)
        
        # Asegurarse de que exista el directorio destino
        os.makedirs(os.path.dirname(dest_path_full), exist_ok=True)
        
        # Copiar archivo si existe
        if os.path.exists(src_path_full):
            try:
                shutil.copy2(src_path_full, dest_path_full)
                print(f"Copiado: {src_file} -> {dest_file}")
            except PermissionError:
                failed_copies.append((src_file, dest_file))
                print(f"Error de permisos al copiar: {src_file}")
            except Exception as e:
                failed_copies.append((src_file, dest_file))
                print(f"Error al copiar {src_file}: {str(e)}")
        else:
            print(f"Advertencia: Archivo no encontrado: {src_file}")
    
    # Reportar archivos que no se pudieron copiar
    if failed_copies:
        print("\nLos siguientes archivos no se pudieron copiar debido a permisos o uso:")
        for src, dest in failed_copies:
            print(f"- {src} -> {dest}")
        print("\nSugerencias:")
        print("1. Cierre todos los editores de código o aplicaciones que puedan estar usando estos archivos")
        print("2. Ejecute el script nuevamente")
        print("3. Si el problema persiste, intente copiar estos archivos manualmente")
    
    # También copiar los archivos que se mantienen (por seguridad)
    for file in keep_files:
        full_path = os.path.join(src_path, file)
        if os.path.exists(full_path):
            dir_name = os.path.dirname(full_path)
            os.makedirs(dir_name, exist_ok=True)
            # No es necesario copiar ya que se queda en el mismo lugar

def create_index_files(base_path):
    """Crea archivos index.ts para exportar componentes"""
    
    # Directorios donde crear archivos index
    index_dirs = [
        "src/components/ui",
        "src/components/modals",
        "src/components/cards",
        "src/components/media",
        "src/components/forms",
        "src/utils",
    ]
    
    for dir_path in index_dirs:
        full_path = os.path.join(base_path, dir_path)
        if os.path.exists(full_path):
            index_file = os.path.join(full_path, "index.ts")
            with open(index_file, 'w') as f:
                f.write("// Exporta todos los componentes de este directorio\n")
                f.write("// Ejemplo: export { default as ComponentName } from './ComponentName';\n")
            print(f"Creado archivo index: {index_file}")

def update_imports(base_path):
    """Actualiza las rutas de importación en archivos .js, .jsx, .ts, .tsx y .astro"""
    # Esta función necesitaría analizar código y actualizar rutas de importación
    # Es compleja y requeriría un parser de código, lo cual está fuera del alcance de este script básico
    print("\nIMPORTANTE: Necesitarás actualizar manualmente las rutas de importación en tus archivos.")
    print("Por ejemplo, si antes tenías: import Card from '../components/Card.astro'")
    print("Ahora deberías tener: import Card from '../components/ui/Card.astro'")

def generate_alias_config(base_path):
    """Genera configuración de alias para tsconfig.json"""
    tsconfig_path = os.path.join(base_path, "tsconfig.json")
    
    if os.path.exists(tsconfig_path):
        # Leer archivo actual
        with open(tsconfig_path, 'r') as f:
            content = f.read()
        
        # Asumiendo un archivo JSON simple, podríamos manipularlo como texto
        # En un caso real, deberías usar json.load/json.dump
        if '"paths":' not in content:
            paths_config = """
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@ui/*": ["src/components/ui/*"],
      "@modals/*": ["src/components/modals/*"],
      "@cards/*": ["src/components/cards/*"],
      "@media/*": ["src/components/media/*"],
      "@forms/*": ["src/components/forms/*"],
      "@layouts/*": ["src/layouts/*"],
      "@sections/*": ["src/sections/*"],
      "@styles/*": ["src/styles/*"],
      "@utils/*": ["src/utils/*"],
      "@data/*": ["src/data/*"],
      "@assets/*": ["src/assets/*"],
      "@types/*": ["src/types/*"]
    },"""
            
            # Reemplazar "compilerOptions": { con nuestra versión
            updated_content = content.replace('"compilerOptions": {', paths_config)
            
            # Escribir archivo actualizado
            with open(tsconfig_path, 'w') as f:
                f.write(updated_content)
            
            print(f"Actualizado: {tsconfig_path} con configuración de alias")
        else:
            print(f"El archivo {tsconfig_path} ya parece tener configuración de paths, revisa manualmente")

def update_astro_config(base_path):
    """Actualiza la configuración de Astro para usar alias"""
    astro_config_path = os.path.join(base_path, "astro.config.mjs")
    
    if os.path.exists(astro_config_path):
        # Leer archivo actual
        with open(astro_config_path, 'r') as f:
            content = f.read()
        
        # Verificar si ya tiene configuración de alias
        if "vite: {" not in content:
            # Encontrar la posición para insertar
            last_bracket_pos = content.rfind("}")
            
            if last_bracket_pos != -1:
                # Insertar configuración de Vite
                vite_config = """
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
"""
                # Añadir importación de path si no existe
                if "import path" not in content:
                    content = "import path from 'path';\n" + content
                
                updated_content = content[:last_bracket_pos] + vite_config + content[last_bracket_pos:]
                
                # Escribir archivo actualizado
                with open(astro_config_path, 'w') as f:
                    f.write(updated_content)
                
                print(f"Actualizado: {astro_config_path} con configuración de alias en Vite")
            else:
                print(f"No se pudo actualizar {astro_config_path}, formato inesperado")
        else:
            print(f"El archivo {astro_config_path} ya parece tener configuración de Vite, revisa manualmente")

def main():
    """Función principal"""
    # Asumimos que estamos en la raíz del proyecto
    base_path = "."
    
    print("=== Reorganización de Proyecto Astro ===")
    print("\n1. Creando estructura de directorios...")
    create_directory_structure(base_path)
    
    print("\n2. Moviendo archivos a nueva estructura...")
    move_files(base_path)
    
    print("\n3. Creando archivos index.ts...")
    create_index_files(base_path)
    
    print("\n4. Generando configuración de alias...")
    generate_alias_config(base_path)
    
    print("\n5. Actualizando configuración de Astro...")
    update_astro_config(base_path)
    
    print("\n6. Actualizando importaciones...")
    update_imports(base_path)
    
    print("\n=== Proceso completado ===")
    print("\nRECOMENDACIONES ADICIONALES:")
    print("1. Revisa manualmente todas las importaciones en tus archivos")
    print("2. Elimina los archivos antiguos después de verificar que todo funciona correctamente")
    print("3. Considera usar CSS Modules o CSS-in-JS para evitar conflictos de nombres")
    print("4. Actualiza tu configuración de Astro según las recomendaciones proporcionadas")

if __name__ == "__main__":
    main()