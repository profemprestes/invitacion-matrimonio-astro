import os

def guardar_estructura_y_contenido(directorio_raiz, archivo_salida):
    with open(archivo_salida, 'w', encoding='utf-8') as f:
        for ruta_actual, carpetas, archivos in os.walk(directorio_raiz):
            nivel = ruta_actual.replace(directorio_raiz, '').count(os.sep)
            indentacion = '    ' * nivel
            f.write(f"{indentacion}{os.path.basename(ruta_actual)}/\n")
            for archivo in archivos:
                ruta_archivo = os.path.join(ruta_actual, archivo)
                f.write(f"{indentacion}    {archivo}\n")
                try:
                    with open(ruta_archivo, 'r', encoding='utf-8') as file_content:
                        contenido = file_content.read()
                        f.write(f"\n{indentacion}    --- Contenido de {archivo} ---\n")
                        for linea in contenido.splitlines():
                            f.write(f"{indentacion}    {linea}\n")
                        f.write(f"{indentacion}    --- Fin de {archivo} ---\n\n")
                except Exception as e:
                    f.write(f"{indentacion}    [Error al leer archivo: {e}]\n\n")

# Cambiá esto por el directorio raíz que querés explorar
directorio = 'src'  # o 'public'
archivo_salida = 'estructura_contenido.txt'

guardar_estructura_y_contenido(directorio, archivo_salida)
print(f"Estructura y contenido guardados en: {archivo_salida}")
