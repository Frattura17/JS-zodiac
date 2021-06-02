// alert("hola mundo");

document.write("<h1> Hola mundo </h1>");

// Pedir datos al usuario
// let nombreUsuario = prompt("Como es tu nombre?");
// let nombreUsuario2 = prompt("Como es el nombre de tu compañero?");

// Esto se llama COCATENAR
// document.write("Hola "+nombreUsuario+" y "+nombreUsuario2)

// Variables Numericas

let Edad = prompt("Cual es tu edad?")
let Edad2 = prompt("Cual es la edad de tu hermanx?")

//// Diferencia de Edad
//   Algoritmo - preguntarme que dato es mayor y obtener su deferencia en el orden 
//               correspondiente devolviendo una respuesta.

if (Edad > Edad2){
    let direfencia = Edad - Edad2;
    alert("Tu hermanx y tu se llevan "+direfencia+" años, tu eres el mayor")
}
else if (Edad < Edad2){
    let direfencia = Edad2 - Edad;
    alert("Tu hermanx y tu se llevan "+direfencia+" años, y tu eres el menor")
}
else {
    alert("Tu hermano y tu tienen la misma edad, son mellizos???")
}
.




