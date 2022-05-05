console.log("Hola mundo!")

// Definimos variables
// Dos tipos de variables: modificables y constantes
let nombre = "Alex" // String : cadena de caracteres - modificable
nombre = "Juan"

console.log(nombre)


// Varios tipos de datos para una variable
// String       : cadena de caracteres - "Valor"
// Int          : numeros sin coma - 123
// Float        : numeros con coma (punto) - 123.05
// Boolean      : verdadero o falso - true / false
// Arrays       : lista de variables - [1, 2, 3, 4, true, "Alex"]
// Objects      : Estructura de datos - {nombre: "Alex", edad: 30}
// Functions    : Funciones - function (params) { ... return valor }

let textoH2 = "Diseno para mobile"
let textoP  = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, praesentium. Molestiae perspiciatis reiciendi"

// Si puedo acceder al HTML desde el JS - Si
// DOM : Document Object Model
// Quiero el h2 hijo del .contensor
// Selectores

let h2      = document.querySelector('.contensor h2')
let p       = document.querySelector('.contensor p')
let menu    = document.querySelector('#menu')
let secciones = document.querySelectorAll('.secciones') // Guardamos las tres secciones del HTML

let openMenu = false

console.log(h2)

// Obtener el valor del texto - h2.innerText : texto interno del HTML
// Darle el valor al HTML con el texto que quiera : h2.innerText = textoH2

h2.innerText = textoH2
p.innerText  = textoP

const abreCierraMenu = function (){
    // El menu esta abierto?
    if(openMenu === true){ // Si
        // Bueno, lo cierro
        menu.style.display = 'none'
        // Le digo al programa que esta cerrado
        openMenu = false
    } else {
        menu.style.display = 'block'
        openMenu = true
    }
}

const muestraSeccion = function (nombreSeccion){
    // Recorre item por item
    secciones.forEach( item => {
        // Va ocultando item por item
        item.style.display = 'none'
    })

    // Pero muestro la que seleccione
    document.querySelector(nombreSeccion).style.display = 'flex'
}