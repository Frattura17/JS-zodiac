let div = document.getElementById('elemento');
// let pEl = document.getElementsByTagName('p');
// let pElQuery = document.querySelectorAll('button.btn');
// let pElClass = document.getElementsByClassName('btn');

//Crear nodo
let p = document.createElement('p');

//Insertar texto o contenido en el nodo

// p.textContent = '<strong>Append Text</strong>';
// p.innerText = '<strong class="text-danger">Append Text</strong>';
p.innerHTML = '<strong class="text-danger">Append Text</strong>';
// p.textContent = 'Append Text';
// console.log(pElClass);
div.append(p);
//me devuelve un array de elemenyos que coincide con el parámetro pasado al método
let pQuery = document.getElementsByClassName('query');
console.log(pQuery[1].classList);
pQuery[1].classList.add('p-4');

let newContent = document.createElement('p');
newContent.innerHTML = `Este es un <strong>ELEMENTO</strong> nuevo generado y que va a ser insertado posteriormente como <span class="text-warning"> hijo en otro nodo</span>`;
newContent.classList.add('text-white', 'fs-3', 'text-center');
newContent.style.backgroundColor = '#000';
// console.log(pQuery)
let oldElement = document.getElementsByClassName('text-gray');

//Como getElementsByClassName devuelve un array, necesito acceder al elemento buscado a través de su indice
console.log(oldElement[0])

//Reemplazar un nodo

// div.replaceChild(newContent, oldElement[0]);
//Insertar un nuevo elemento antes de otro -> oldElemento
// div.insertBefore(newContent, oldElement[0]);

//Como blanquear los hijos de un nodo y como añadir un elemento
// div.innerHTML = '';
// div.appendChild(newContent);


// div.innerHTML = newContent;
let pClone = document.querySelector('.text-gray');
div.append(pClone.cloneNode(false));
// console.log('FirstChilde del Div',  );


let buttons = document.getElementsByClassName('btn');
console.log('Botones:', buttons);

for (let i = 0; i < buttons.length; i++) {
        // Como busco elementos que NO tengan valor disabled uso el operador NOT para invertir el resultado de la condición
        if(!buttons[i].classList.contains('disabled')){
            buttons[i].classList.remove('disabled');
        }
}

let imgRef = document.getElementById('zodiac');
console.log(imgRef.src);

setInterval(function() {
    let randomNumber = parseInt(Math.random() * 6) + 1;
    imgRef.src = `/assets/images/zodiac/${randomNumber}.jpg`;
}, 500)

