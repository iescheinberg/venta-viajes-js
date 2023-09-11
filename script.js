import { barcelona, roma, paris, londres } from './ciudades.js'


// Obtener los elementos del DOM

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')


//  Agregar un evento click a cada enlace
enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
        // REMOVER CLASE "active" DE TODOS LOS ENLACES
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        });

        // AGREGAR CLASE "active" AL ENLACE ACTUAL
        this.classList.add('active')

        // OBTENER EL CONTENIDO CORRESPONDIENTE SEGÚN ENLACE
        let contenido =  obtenerContenido(this.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio


    // Traer informacion del objeto correspondiente a la eleccion

    // Mostrar el contenido en el DOM
})
    })

    

// Función para traer la informaci;oncorrecta desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}