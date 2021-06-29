
let copa = ["Uruguay","Uruguay","Argentina","Brasil","Uruguay","Uruguay","Argentina","Uruguay","Argentina","Argentina","Uruguay","Argentina","Peru","Argentina","Uruguay","Argentina","Argentina","Argentina","Brasil","Paraguay","Argentina","Uruguay","Argentina","Argentina","Uruguay","Bolivia","Uruguay","Peru","Paraguay","Uruguay","Uruguay","Brasil","Argentina","Argentina","Uruguay","Brasil","Brasil","Colombia","Brasil","Brasil","Uruguay","Chile","Chile","Brasil"]

function ArrayMap() {

let dolar = [window.prompt("Ingrese un valor positivo de dolares")];
let pesos = dolar.map(function(valor) {

    return valor * 172
})
console.log(dolar);
console.log(pesos);
}

function ArrayFilter() {
    let pais = copa.filter(function(valor){
        return valor == 'Uruguay'
    });
    console.log(pais.length);
    console.log(pais);
}

function ArrayFind() {
    let pais = copa.find(function(valor){
        return valor == 'Argentina'
    });
    console.log(pais.length);
    console.log(pais);
}

function ArrayFill() {
    let pais = copa.fill('Argentina', 1, 8);
    console.log(pais.length);
    console.log(pais);
}

