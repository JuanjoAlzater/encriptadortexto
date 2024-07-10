
let personaje = document.getElementById("imagenencriptador")
// Función para encriptar texto
function encriptar(texto) {
    // Reemplazar cada vocal con su correspondiente "llave"
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función para desencriptar texto
function desencriptar(texto) {
    // Revertir cada "llave" a su correspondiente vocal
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Función que se llama al hacer clic en el botón "Encriptar"
function encriptarTexto() {
    let inputTexto = document.getElementById("inputTexto").value; // Obtener el texto del área de entrada
    let textoEncriptado = encriptar(inputTexto); // Encriptar el texto
    document.getElementById("outputTexto").value = textoEncriptado; // Mostrar el texto encriptado en el área de salida
}

// Función que se llama al hacer clic en el botón "Desencriptar"
function desencriptarTexto() {
    let inputTexto = document.getElementById("inputTexto").value; // Obtener el texto del área de entrada
    let textoDesencriptado = desencriptar(inputTexto); // Desencriptar el texto
    document.getElementById("outputTexto").value = textoDesencriptado; // Mostrar el texto desencriptado en el área de salida
}

