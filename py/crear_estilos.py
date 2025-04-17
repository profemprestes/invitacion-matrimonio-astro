import os

# Estructura de carpetas y archivos
estructura = {
    "styles": [
        "base.css",
        "home.css",
        "about.css",
        "contact.css",
        "components/navbar.css",
        "components/footer.css",
        "components/buttons.css"
    ]
}

# Crear carpetas y archivos
for carpeta, archivos in estructura.items():
    for archivo in archivos:
        ruta_completa = os.path.join(carpeta, archivo)
        carpeta_padre = os.path.dirname(ruta_completa)
        os.makedirs(carpeta_padre, exist_ok=True)  # Crear carpetas si no existen
        with open(ruta_completa, 'w', encoding='utf-8') as f:
            f.write(f"/* {archivo} */\n")  # Comentario inicial opcional
        print(f"Archivo creado: {ruta_completa}")
