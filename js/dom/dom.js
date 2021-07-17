// let padre = document.getElementsByClassName('padre'); //devuelve un array HTMLcollection
//acceder al primer elemento
// console.log(padre[0]);


let padre = document.getElementById('padre2');
// let padre = document.querySelectorAll('.abuelo > div');
// let padre = document.getElementsByClassName('padre');
// let padre = document.querySelector('.padre');

let hijos = padre.children;

let hijo = document.getElementById('hijo1');
let padre2 = hijo.parentElement;
let abuelo2 = padre2.parentElement;
console.log('padre2', padre2);
console.log('abuelo2', abuelo2);

let abuelo3 = hijo.closest('#granpa');
console.log('abuelo3', abuelo3);

let hermanoAnterior = hijo.previousElementSibling;
let hermanoSiguiente = hijo.nextElementSibling;
console.log(hermanoAnterior);
cambiarEstilos(hermanoAnterior);
cambiarEstilos(hermanoSiguiente);



//como me devuelve una HTML Collection y no puedo usar los métodos de un array lo transformo
hijos = Array.from(hijos);


// hijos.forEach(el => {
//     cambiarEstilos(el);
// });
// For in se usa para recorrer los nombres de las propiedades de los objetos
// For of se usa para recorrer los valores de un array
// for(el of padre) {
//     console.log(el);
// }

function cambiarEstilos(el) {
     el.style.backgroundColor = '#333';
     el.classList.add('encontrado');
}
