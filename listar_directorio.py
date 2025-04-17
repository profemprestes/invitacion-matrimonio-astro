import os

def guardar_estructura(directorio_raiz, archivo_salida):
    with open(archivo_salida, 'w', encoding='utf-8') as f:
        for ruta_actual, carpetas, archivos in os.walk(directorio_raiz):
            nivel = ruta_actual.replace(directorio_raiz, '').count(os.sep)
            indentacion = '    ' * nivel
            f.write(f"{indentacion}{os.path.basename(ruta_actual)}/\n")
            for archivo in archivos:
                f.write(f"{indentacion}    {archivo}\n")

# Cambiá esto por la ruta de tu carpeta raíz del proyecto
directorio = 'src'  # o 'public'
archivo_salida = 'estructura_directorio.txt'

guardar_estructura(directorio, archivo_salida)
print(f"Estructura guardada en: {archivo_salida}")
