import os

# Ruta base donde se crearán los CSS
base_path = r"G:\01-Galia\Nueva carpeta\invitacion-matrimonio-astro\src\styles\css\sections"

# Nombres de las secciones
secciones = [
    "Hero",
    "Countdown",
    "PrincipalDate",
    "Party",
    "Intro"
]

# Crear carpeta si no existe
os.makedirs(base_path, exist_ok=True)

# Crear archivos CSS vacíos con comentario inicial
for nombre in secciones:
    archivo = f"{nombre}.css"
    ruta = os.path.join(base_path, archivo)
    with open(ruta, "w", encoding="utf-8") as f:
        f.write(f"/* {nombre}.css */\n")
    print(f"Archivo creado: {ruta}")
