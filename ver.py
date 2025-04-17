from pathlib import Path

def detectar_encoding(path):
    import chardet
    with open(path, 'rb') as f:
        rawdata = f.read()
        result = chardet.detect(rawdata)
        return result['encoding']

def leer_log(filepath):
    ruta_log = Path(filepath)
    encoding_detectado = detectar_encoding(ruta_log)
    print(f"Encoding detectado: {encoding_detectado}")

    texto_log = ruta_log.read_text(encoding=encoding_detectado)
    print("Contenido del archivo:")
    print("-" * 40)
    print(texto_log)

if __name__ == "__main__":
    leer_log("check_output.log")
