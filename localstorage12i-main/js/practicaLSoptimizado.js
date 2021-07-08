/*
    Este código se puede optimizar aún más, sin embargo ya empieza a volverse cada vez más complejo de leer,
    creo que hasta donde sabemos y con los comentarios que les dejo, pueden llegar a interpretar correctamente el código,
    no se preocupen si les cuesta al principio, pero la idea es que vayan de a poco viendo distintas formas de programar,
    ya que uno puede buscar una solución diferente a distintos problemas y no significa que este mal, sino que es cuestión de entrenar
    ese pensamiento lógico y observar las diferentes formas de programar para aprender.
*/
//Inicializo la variable arrayListaSuper
// al colocar el condicional OR "||" si obtengo algo desde el storage lo asigno a la variable arrayListaSuper si no encuentro nada ejecuto la parte derecha del || y asigno en este caso un array vacio []
let arrayListaSuper = JSON.parse(localStorage.getItem('items')) || [];

let ulProductos = document.getElementById('listaProductos');
//Pinto en el HTML los elementos invocando la función destinada a esto:
renderizarLista();

function agregarProducto(event) {
    /* En el if analizo dos opciones para dejarlo pasar y hacer la carga:
        - La primera pregunto, si la función recibe un event, y si ese event es la tecla enter "keyCode 13"
        - La otra opción será que si no recibo un evento como parámetro en la opción es por que la llame agregarProducto() sin enviar parámetro y por lo tanto ese valdrá undefined y lo dejo pasar igualmente.
    */
    if ((event && event.keyCode == 13) || event == undefined) {
        let producto = document.getElementById('productoInput').value;
        //Verificar la longitud del texto insertado en el input, en este caso que sea mayor que 3 letras
        if (producto.length > 0) {
            arrayListaSuper.push(producto);
            // console.log(arrayListaSuper);
            localStorage.setItem("items", JSON.stringify(arrayListaSuper));
            // console.log(JSON.stringify(arrayListaSuper));
            document.getElementById('productoInput').value = "";
            renderizarLista();
        } else return;
    }
}
// renderizar los productos!
function renderizarLista() {
    // Se modifico length por que esta función evalua la cantidad de elementos que tengo en mi localStorage pero no significa que ese elemento sea la lista de compras puntualmente
        let liHTML = "";
        for (item in arrayListaSuper) {
            liHTML += `<li class="list-group-item d-flex justify-content-between align-items-center" onclick="borrar(${item})">${arrayListaSuper[item]}</li> `;
        }
        //al igualar
        ulProductos.innerHTML = liHTML;
}

//Con una sola función podemos borrar un elemento o todos, basandonos en si la función recibe como parametro algún valor 0 ~ N, o si no me envian nada "undefined" borro todo el array
function borrarTodo(index) {
    // si viene un index borro solo ese elemento
    if (index != undefined) {
        arrayListaSuper.splice(index, 1);
    } else {
        // si no viene un index => "undefined" borro todo el array
        arrayListaSuper = [];
    }
    //Una vez modificado el array ya sea sin el elemento borrado en el IF o blanqueado completamente, lo guardo y vuelvo a renderizar los elementos
    localStorage.setItem('items', JSON.stringify(arrayListaSuper));
    renderizarLista();
}

function editarItem(event) {
   // COMPLETAR!!!!!
}