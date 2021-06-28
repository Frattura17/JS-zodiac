document.write("Consigna: Imprimir un script que simule el lanzamiento de dos dados. Hacer uso de la funcion Math.Random para obtener numeros aleatorios entre 1 y 6 para cada uno de los lanzamientos. Sumar los resultados de ambos dados y anotar en un array el numero de apariciones de la suma, repitiendolo 5 veces. El lanzamiento sera por turno, tenemos 3 jugadores. Al final se debera hacer una suma.")

let resultados = [];
let jugadores = ["Amarillo" , "Verde" , "Azul" , "Rojo" , "Marron"]
let maximo = 0;
let ganador;

for(let i = 0; i < 5; i++){

    for(let j = 0; j < jugadores.length; j++){

        if(resultados[j] == undefined){
            resultados[j] = 0; }

        let dadoUno = (Math.trunc(Math.random() * 6) + 1)
        let dadoDos = (Math.trunc(Math.random() * 6) + 1)
        console.log(jugadores[j], 'Tiro Dado Uno: ' + dadoUno)
        console.log(jugadores[j], 'Tiro Dado Dos: ' + dadoDos)
        
        resultados[j] += dadoUno + dadoDos;
        console.log('Resultados: ', resultados[j])
    }
}
for(let i = 0; i < jugadores.length; i++){
    console.log('El jugador', jugadores[i], 'obtuvo', resultados[i], 'puntos')
    if(maximo < resultados[i]){
        maximo = resultados[i]
        ganador = jugadores[i]
    }
}
console.log('El Ganador es', ganador, 'con un puntaje de', maximo)