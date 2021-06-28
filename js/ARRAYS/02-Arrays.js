


let array = ["Buenos Aires ", " Cordoba " , " Santiago del Estero ", " Tucuman " , " San Juan ", " Neuquen "]

console.log(array, "Array Original:")
console.log("Longitud de Array: ", array.length)
document.write(" Array Original : " + array, '<br>')

   //  array    -   splice

   array.splice(0,1, "Capital Federal")
   
   console.log(array, "Splice: Cambio 0 por Capital Federal")
   console.log("Longitud de Array: ", array.length)
   document.write(" Array con .splice : " + array, '<br>')


   array.splice(0,3, "Capital Federal")
   
   console.log(array, "Splice: Cambio 0,1 y 2 por Capital Federal")
   console.log("Longitud de Array: ", array.length)
   document.write(" Array con .splice : " + array, '<br>')


   array.splice(0,5,"Capital Federal")
   
   console.log(array, "Splice: Cambio todo por Capital Federal")
   console.log("Longitud de Array: ", array.length)
   document.write(" Array con .splice : " + array, '<br>')


   
