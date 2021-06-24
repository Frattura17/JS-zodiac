console.log("Consigna: Realiza un script que imprima los numeros en piramide del 1 al 30")

document.write("- - " + "/Ejercicio 5/" + "- - " + '<br>')
for(let i = 1 ; i <= 10; i++){
for(var x = 0; x < i; x++){
        document.write("-" + i)
    }
    document.write('<br>')
    console.log("Entró")
}
    document.write('<br>' + "-" +"Salió del Bucle")
    console.log("Salió")