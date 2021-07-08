let arrayListaSuper = [];
traerItemsDelLS();

function agregarProducto() {
  let producto = document.getElementById("productoInput").value;
  arrayListaSuper.push(producto);
  // console.log(arrayListaSuper);
  localStorage.setItem("items", JSON.stringify(arrayListaSuper));
  // console.log(JSON.stringify(arrayListaSuper));
  document.getElementById("productoInput").value = "";
  traerItemsDelLS();
}

// renderizar los productos!
function traerItemsDelLS() {
  if (localStorage.length > 0) {
    let ulProductos = document.getElementById("listaProductos");
    let _arrayListaSuper = JSON.parse(localStorage.getItem("items"));
    // renderizar
    borrarProductos();
    let liHTML = "";
    for (item in _arrayListaSuper) {
      liHTML = `<li class="list-group-item" id="${item}" onclick="borrarItemClickeado(${item})">
            ${_arrayListaSuper[item]}</li>`;
      ulProductos.innerHTML += liHTML;
    }
    if (arrayListaSuper.length == 0) {
      arrayListaSuper = _arrayListaSuper;
    }
  } else {
    // si el local esta vacio
  }
}

// para que no repita en el bucle // probar otra forma
function borrarProductos() {
  let ulProductos = document.getElementById("listaProductos");
  if (ulProductos.children.length > 0) {
    while (ulProductos.firstChild) {
      ulProductos.removeChild(ulProductos.firstChild);
    }
  }
}

// para cargar con enter
function cargarConEnter(event) {
  // console.log(event);
  if (event.keyCode == 13) {
    agregarProducto();
  }
}

// para borrar todo el LS
function borrarTodo() {
  // borro del ls
  localStorage.clear();
  // borro de la pantalla
  borrarProductos();
  //para que no me traiga los valores viejos que estaban en este array y que ya se borraron del ls
  arrayListaSuper = [];
}

// borrar itemclickeado
function borrarItemClickeado(index) {
    console.log(index);
    // borro el  item del arreglo
    arrayListaSuper.splice(index,1);
    // actualizar el localstorage
    localStorage.setItem("items", JSON.stringify(arrayListaSuper));
    // vovlver a dibujar la lista
    traerItemsDelLS();
}
