console.log("Consigna 7: Solicite al usuario un texto e imprima como resultado la cantidad de vocales del mismo")
let cadena = prompt("Introduce una cadena de texto:");
    let numchar = cadena.length;    //Devuelve la longitud del string.
    cadena = cadena.toUpperCase();  //Devuelve el string en mayúsculas.
    let vocal;
    let contador = 0;
    let i;
    

    for (i = 0; i < numchar; i++) {
        vocal = cadena.charAt(i);    //recupera el caracter i del string.
        if ((vocal == "A") || (vocal == "E") || (vocal == "I") || (vocal == "O") || (vocal == "U")) {
            contador++;
            console.log("Entró texto")
        }
    }
    document.write("-" +"Número de Vocales: " + contador + ".");
    console.log("Salió")