// Variable para almacenar el idioma actual de la página
var idioma;

// Definición de los elementos HTML, utilizando el DOM
var logo;
var h1;
var botones_idioma;
var texto_entrada;
var img_precaucion;
var alerta;
var encriptar;
var desencriptar;
var resultado;
var texto_salida;
var copiar;
var error;
var img_error;
var titulo_error;
var parrafo_error;
var developer;
var year;

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

    logo = document.getElementById('logo');
    h1 = document.getElementById('titulo-principal');
    botones_idioma = document.querySelectorAll('.idioma');
    texto_entrada = document.getElementById('texto-entrada');
    img_precaucion = document.getElementById('img-precaucion');
    alerta = document.getElementById('precaucion-texto');
    encriptar = document.getElementById('boton-encriptar');
    desencriptar = document.getElementById('boton-desencriptar');
    resultado = document.getElementById('resultado');
    texto_salida = document.getElementById('texto-salida');
    copiar = document.getElementById('boton-copiar');
    error = document.getElementById('error');
    img_error = document.getElementById('img-error');
    titulo_error = document.getElementById('titulo-error')
    parrafo_error = document.getElementById('parrafo-error')
    developer = document.getElementById('desarrollador')
    year = document.getElementById('year')

    // Vacia la clase 'presionado' para que solo exista un botón en esta clase
    botones_idioma.forEach(function(boton) {
        boton.classList.remove('presionado');
    });
    
    // Agrega el botón que fue presionado a la clase presionado
    boton_presionado.classList.add('presionado');

    // En caso de que el idioma seleccionado sea español
    if (idioma === 'es'){
        document.title = 'Encriptador de Texto Web | Challenge ONE';
        logo.alt = 'Logo de Alura, es una "a" minúscula de color azul oscuro';
        h1.textContent = 'Encriptador de Texto Web | Challenge ONE';
        texto_entrada.placeholder = 'Ingrese el texto aquí';
        img_precaucion.alt = 'Pequeño círculo con símbolo de exclamación centrado.';
        alerta.textContent = 'Solo letras minúsculas y sin acentos';
        encriptar.textContent = 'Encriptar';
        desencriptar.textContent = 'Desencriptar';
        texto_salida.placeholder = 'Visualización del resultado';

        if (copiar.textContent === 'Copied Text!' || copiar.textContent === 'Texto Copiado!') {
            copiar.textContent = 'Texto Copiado!';
        }
        else {
            copiar.textContent = 'Copiar';
        }
        
        img_error.alt = 'Imagen de una mujer tratando de encontrar un diamante.';
        titulo_error.textContent = 'Ningún mensaje fue encontrado';
        parrafo_error.textContent = 'Ingresa el texto que desees encriptar o desencriptar.';
        developer.innerHTML = '<b>Desarrollado por:</b> Luis Mario Bonilla Madera';
        year.innerHTML = '<b>Año:</b> 2024';        
    }

    // En caso de que el idioma seleccionado sea inglés
    else if (idioma === 'en'){
        document.title = 'Web Text Encryptor | Challenge ONE';
        logo.alt = 'Alura logo, it is a dark blue lowercase "a"';
        h1.textContent = 'Web Text Encryptor | Challenge ONE';
        texto_entrada.placeholder = 'Enter text here';
        img_precaucion.alt = 'Small circle with centered exclamation symbol.';
        alerta.textContent = 'Only lowercase letters and no accents';
        encriptar.textContent = 'Encrypt';
        desencriptar.textContent = 'Decrypt';
        texto_salida.placeholder = 'Result display';

        if (copiar.textContent === 'Texto Copiado!') {
            copiar.textContent = 'Copied Text!';
        }
        else {
            copiar.textContent = 'Copy';
        }

        img_error.alt = 'Image of a woman trying to find a diamond.';
        titulo_error.textContent = 'No message was found';
        parrafo_error.textContent = 'Enter the text you want to encrypt or decrypt.';
        developer.innerHTML = '<b>Developed by:</b> Luis Mario Bonilla Madera';
        year.innerHTML = '<b>Year:</b> 2024';        
    }

    // En caso de que el idioma seleccionado sea portugués
    else if (idioma === 'pt'){
        document.title = 'Criptografador de texto da Web | Desafie ONE';
        logo.alt = 'Logotipo da Alura, é um "a" minúsculo em azul escuro';
        h1.textContent = 'Criptografador de texto da Web | Desafie ONE';
        texto_entrada.placeholder = 'Insira o texto aqui';
        img_precaucion.alt = 'Círculo pequeno com símbolo de exclamação centralizado.';
        alerta.textContent = 'Apenas letras minúsculas e sem acentos';
        encriptar.textContent = 'Criptografar';
        desencriptar.textContent = 'Descriptografar';
        texto_salida.placeholder = 'Exibição de resultados';

        if (copiar.textContent === 'Copied Text!' || copiar.textContent === 'Texto Copiado!') {
            copiar.textContent = 'Texto Copiado!';
        }
        else {
            copiar.textContent = 'Cópia de';
        }
        
        img_error.alt = 'Imagem de uma mulher tentando encontrar um diamante.';
        titulo_error.textContent = 'Nenhuma mensagem foi encontrada';
        parrafo_error.textContent = 'Digite o texto que deseja criptografar ou descriptografar.';
        developer.innerHTML = '<b>Desenvolvido por:</b> Luis Mario Bonilla Madera';
        year.innerHTML = '<b>Ano:</b> 2024';        
    }
}

// Función para almacenar la informacion del textarea de visualización en el portapapeles
function copiar_portapapeles() {
    let textarea = document.getElementById('texto-salida');
    let button = document.getElementById('boton-copiar')
    
    textarea.select()
    
    document.execCommand('copy')
    
    textarea.setSelectionRange(0, 0);

    if (idioma === 'es' || idioma === 'pt'){
        button.textContent = 'Texto Copiado!'
    }
    else if (idioma === 'en'){
        button.textContent = 'Copied Text!'
    }

    setTimeout(() => {
        if (idioma === 'es') {
            copiar.textContent = 'Copiar';
        }
        else if (idioma === 'en') {
            copiar.textContent = 'Copy';
        }
        else if (idioma === 'pt'){
            copiar.textContent = 'Cópia de';
        }
    }, 1000); 
}

/* ADAPTAR PARA LA ENCRIPTACION */
function encriptar_mensaje() {
    texto_salida.textContent = texto_entrada.textContent;

    if (idioma === 'es') {
        copiar.textContent = 'Si Señor!!!';
    }
    else if (idioma === 'en') {
        copiar.textContent = 'Yessir!!!';
    }
    else if (idioma === 'pt') {
        copiar.textContent = 'Sim senhor!!!';
    }
}

/* ADAPTAR PARA LA DESENCRIPTACION */
function desencriptar_mensaje() {
    
    // Obtener el estilo computado del elemento resultado
    var resultadoStyle = window.getComputedStyle(resultado);

    // Verificar la visibilidad del elemento resultado
    if (resultadoStyle.display === 'none') {
        resultado.style.display = 'flex'; // Mostrar el resultado
        error.style.display = 'none'; // Ocultar el error
    } else {
        error.style.display = 'flex'; // Mostrar el error
        resultado.style.display = 'none'; // Ocultar el resultado
    }
}