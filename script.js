// Variable para almacenar el idioma actual de la página
var idioma;

// Este evento se dispará luego de que todo el contenido HTML este completamente cargado en la página
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el primer botón con la clase 'idioma'
    let idioma_predeterminado = document.querySelector('.idioma');

    // Llama a la función cambiar_idioma para seleccionar el idioma del primer botón
    cambiar_idioma(idioma_predeterminado); 
});

// Función para cambiar el idioma de los elementos de la página
function cambiar_idioma(boton_presionado) {
    // Transformando el valor del boton a minúsculas (lowercase)
    idioma = boton_presionado.textContent.toLowerCase();

    // Definición de los elementos HTML, utilizando el DOM
    let logo = document.getElementById('logo');
    let h1 = document.getElementById('titulo-principal');
    let botones_idioma = document.querySelectorAll('.idioma');
    let texto_entrada = document.getElementById('texto-entrada');
    let img_precaucion = document.getElementById('img-precaucion');
    let alerta = document.getElementById('precaucion-texto');
    let encriptar = document.getElementById('boton-encriptar');
    let desencriptar = document.getElementById('boton-desencriptar');
    let texto_salida = document.getElementById('texto-salida');
    let copiar = document.getElementById('boton-copiar');
    let img_error = document.getElementById('img-error');
    let titulo_error = document.getElementById('titulo-error')
    let parrafo_error = document.getElementById('parrafo-error')

    // Vacia la clase 'presionado' para que solo exista un botón en esta clase
    botones_idioma.forEach(function(boton) {
        boton.classList.remove('presionado');
    });
    
    // Agrega el botón que fue presionado a la clase presionado
    boton_presionado.classList.add('presionado');

    // En caso de que el idioma seleccionado sea español
    if (idioma === 'es'){
        logo.alt = 'Logo de Alura, es una "a" minúscula de color azul oscuro';
        document.title = 'Encriptador de Texto Web | Challenge ONE';
        h1.textContent = 'Encriptador de Texto Web | Challenge ONE';
        texto_entrada.placeholder = 'Ingrese el texto aquí';
        img_precaucion.alt = 'Circulo pequeño con simbolo de explamación centrado.';
        alerta.textContent = 'Solo letras minúsculas y sin acentos';
        encriptar.textContent = 'Encriptar';
        desencriptar.textContent = 'Desencriptar';
        copiar.textContent = 'Copiar';
        texto_salida.placeholder = 'Visualización del resultado';
        img_error.alt = 'Imagen de una mujer tratando de encontrar un diamante.';
        titulo_error.textContent = 'Ningún mensaje fue encontrado';
        parrafo_error.textContent = 'Ingresa el texto que desees encriptar o desencriptar.';
    }

    // En caso de que el idioma seleccionado sea inglés
    else if (idioma === 'en'){
        logo.alt = 'Alura logo, it is a dark blue lowercase "a"';
        document.title = 'Web Text Encryptor | Challenge ONE';
        h1.textContent = 'Web Text Encryptor | Challenge ONE';
        texto_entrada.placeholder = 'Enter text here';
        img_precaucion.alt = 'Small circle with centered exclamation symbol.';
        alerta.textContent = 'Only lowercase letters and no accents';
        encriptar.textContent = 'Encrypt';
        desencriptar.textContent = 'Decrypt';
        copiar.textContent = 'Copy';
        texto_salida.placeholder = 'Result display';
        img_error.alt = 'Image of a woman trying to find a diamond.';
        titulo_error.textContent = 'No message was found';
        parrafo_error.textContent = 'Enter the text you want to encrypt or decrypt.';
    }
}

// Función para almacenar la informacion del textarea de visualización en el portapapeles
function copiar_portapapeles() {
    let textarea = document.getElementById('texto-salida');
    let button = document.getElementById('boton-copiar')
    
    textarea.select()
    
    document.execCommand('copy')
    
    textarea.setSelectionRange(0, 0);

    if (idioma === 'es'){
        button.textContent = 'Texto Copiado!'
    }
    
    else if (idioma === 'en'){
        button.textContent = 'Copied Text!'
    }
}


