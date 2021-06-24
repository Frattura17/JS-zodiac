console.log("Consigna: Requerir al Usuario ingresar un numero entero positivo e imprimir todos los numeros hasta uno menos del doble del mismo")

let numero = window.prompt("Ingrese un numero entero positivo");
numero = parseInt(numero)

while (numero <= 0 || !numero) {
    numero = window.prompt("El valor ingresado no es valido, ingrese un numero");
    numero = parseInt(numero);
    console.log("Entró al While");
}

document.write("- - - /Ejercicio 4/ - - - " + '<br>' + "-")
for(let i = numero; i < (numero * 2) - 1; i += 1){
    document.write(i + '<br>' + "-")
    console.log("Entró")
}
    document.write("Salió del Bucle")
    console.log("Salió")