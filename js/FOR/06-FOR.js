console.log("Consigna 6: Realiza un script que escriba una piramide desde el 1 al numero que ingrese el usuario, no mayor a 50")
let i,rep;
let numero = window.prompt("Ingrese un numero entre 1 y 50")
numero = parseInt(numero)

while(numero > 50 || !numero || numero <= 0){
    numero = window.prompt("Ingrese unicamente un numero entre 1 y 50, por favor")
    numero = parseInt(numero)
    console.log("Entró al while")
}
document.write("- - " + "/Ejercicio 6/" + "- - " + '<br>')
for( i = 1; i <= numero; i++){

for( rep = 0; rep < i; rep++){
        document.write("-" + i)
    }
    document.write('<br>')
    console.log("Entró")
}
document.write("-" +"Salió del bucle")
console.log("Salió")