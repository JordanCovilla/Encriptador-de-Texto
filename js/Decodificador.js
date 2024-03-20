function encriptar() {
    var CerraduraTextarea = document.getElementById('textoCodificado');
    let texto_encriptado = document.getElementById("textoDecodificado").value;
    let arrayTexto = texto_encriptado.split('');
    let contador = 0;

    if (texto_encriptado != texto_encriptado.toLowerCase()) {
        CerraduraTextarea.style.visibility = 'hidden';
        icoCopiarcerradura.style.visibility = 'hidden';
        icoBorrarCerradura.style.visibility = 'hidden';
        alert("Por favor ingresa solo minúsculas, no están permitidas mayúsculas ni simbolos.");
    } else {
        while (contador <= arrayTexto.length) {
            let letra = arrayTexto[contador];
            letra == "a" ? arrayTexto.splice(contador, 1, "ai") : "";
            letra == "e" ? arrayTexto.splice(contador, 1, "enter") : "";
            letra == "i" ? arrayTexto.splice(contador, 1, "imes") : "";
            letra == "o" ? arrayTexto.splice(contador, 1, "ober") : "";
            letra == "u" ? arrayTexto.splice(contador, 1, "ufat") : "";
            contador++;
        }
        let arrayTextoEncriptado = arrayTexto.join('');
        CerraduraTextarea.style.visibility = 'visible';
        icoCopiarcerradura.style.visibility = 'visible';
        icoBorrarCerradura.style.visibility = 'visible';
        CerraduraTextarea.value = arrayTextoEncriptado;
    }
}


function desEncriptar() {
    var CerraduraTextarea = document.getElementById('textoCodificado');
    let texto_encriptado = document.getElementById("textoDecodificado").value;
    let arrayTexto = texto_encriptado.split('');
    let contador = 0;

    if (texto_encriptado != texto_encriptado.toLowerCase()) {
        CerraduraTextarea.style.visibility = 'hidden';
        icoCopiarcerradura.style.visibility = 'hidden';
        icoBorrarCerradura.style.visibility = 'hidden';
        alert("Por favor ingresa solo minúsculas, no están permitidas mayúsculas ni simbolos.");
    } else {
        while (contador <= arrayTexto.length) {
            let letra = arrayTexto[contador];
            letra == "a" ? arrayTexto.splice(contador, 2, "a") : "";
            letra == "e" ? arrayTexto.splice(contador, 5, "e") : "";
            letra == "i" ? arrayTexto.splice(contador, 4, "i") : "";
            letra == "o" ? arrayTexto.splice(contador, 4, "o") : "";
            letra == "u" ? arrayTexto.splice(contador, 4, "u") : "";
            contador++;
        }
        let arrayTextoEncriptado = arrayTexto.join('');
        CerraduraTextarea.style.visibility = 'visible';
        icoCopiarcerradura.style.visibility = 'visible';
        icoBorrarCerradura.style.visibility = 'visible';
        CerraduraTextarea.value = arrayTextoEncriptado;
    }
}

//copiar
async function copiar(elementoCopia) {
    var infoCopiar = elementoCopia.value;
    await navigator.clipboard.writeText(infoCopiar);
}

//borrar
function borrar(elementoBorrar) {
    elementoBorrar.value = "";
}

function ocultarTextarea(elementoOcultar) {
    var CerraduraTextarea = document.getElementById('textoCodificado');
    elementoOcultar.value = "";
    CerraduraTextarea.style.visibility = 'hidden';
    icoCopiarcerradura.style.visibility = 'hidden';
    icoBorrarCerradura.style.visibility = 'hidden';
}