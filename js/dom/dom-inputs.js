let form = document.forms;
let inputOne = form[0].querySelector('input');
let formi = form["myForm"];
// console.log(form["myForm"]);
// console.log(inputOne.value)

console.log('Formitin',formi.elements);

let myForm = Array.from(form["myForm"]);
let submitBtn = document.getElementById('submit');
let fomulario = {};
formi.addEventListener("submit", (e) => {
    e.preventDefault();    
    console.log('Entra');
    for(i of formi) console.log(i.value, i.getAttribute('name'), i);
    
});
formi.addEventListener("input", ( ) => {
    console.log('Entra')
})
 
function checkValidy() {git 
    if(myForm.every(el => el.checkValidity())) submitBtn.classList.remove('disabled');
}

let a = ["Martin", "María", "Marcela", "Martineta", "Mendez", "Carlos", "Canelo", "Jose"];
let lista = document.getElementById('lista');
render(a)
function render(e = null) {
    console.log(e);
    let list = '<h2 class="text-warning mb-4">LISTA DE TAREAS</h2>';
    e.forEach(el => {
        list += `<a href="#" class="list-group-item list-group-item-action" >${el}</a>`;
        // list += `<li>${el}</li>`
    });
    lista.innerHTML = list;
}

let search = document.getElementById('search');
search.addEventListener('keyup', (e) => {
    //SHORTVERSION
    // render(a.filter((el) => el.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1));
    let newArray = []
    a.forEach(item => {
        if(item.includes(e.target.value)) {
            console.log(item.includes(e.target.value));
            newArray.push(item);
        };
    });
    render(newArray)
});

//Otra forma de borrar elementos de una lista
// const list = document.querySelector('#book-list ul');

// list.addEventListener('click', function(e)  {
//     if(e.target.className == 'delete') {
//         const li = e.target.parentElement;
//         list.removeChild(li);
//     }
// })

