
console.log("Hola desde Array")

let array = [ 25 , "Juan", true , false , "Jose" , "Montaña" , "Kaiser" , "blue" , "Pizza"]
//            0  ,  1  ,  2    ,  3   
console.log(array)

array.push("Boca")
console.log(array, "Agregamos Boca con push")

array = [ 25 , "Juan", true , false , "Jose" , "Montaña" , "Kaiser" , "blue" , "Pizza"]
console.log(array, "Igualamos Array al original")

array[5] = "Ramiro"
console.log(array, "Igualamos el 4to elemento por Ramiro")

for(let i = 0; i < array.length; i++){
    document.write("-", array[i] + '<br>')
    console.log("Entro for ")
}

document.write("Longitud del array: ", array.length)
console.log("Longitud del array: ", array.length)