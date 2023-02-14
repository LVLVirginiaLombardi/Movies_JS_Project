let carritoCompras = [];

// Variables
const listadoCompras = document.querySelector('.listado-compras');
const contenedorDibujos = document.querySelector('.contenedor-dibujos');

document.addEventListener('DOMContentLoaded', function(){
    mostrarDibujos();
    mostrarLocalStorage()
})

function mostrarDibujos(){
    listadoDibujos.forEach( dibujo => {
        const {nombre, numero, tipo, precio, imagen } = dibujo

        // Creamos el card
        const main = document.querySelector('#main');
        let container = document.createElement("DIV");
        container.classList.add('card');
        
        container.innerHTML =`
                            <img src="${dibujo.imagen}" class="card-img-top flex-row img" alt="...">
                            <div class="card-body h-100 flex-row">
                            <h5 class="card-title text-center">${dibujo.nombre}</h5>
                            <p class="card-text text-center precio">$ ${dibujo.precio}</p>
                            `
        const buttonComprar = document.createElement('button');
        buttonComprar.classList.add('comprar-dibujo');
        buttonComprar.dataset.idDibujo = numero;
        buttonComprar.textContent = 'Comprar';
        buttonComprar.onclick = seleccionarDibujo;
        container.appendChild(buttonComprar);
        main.appendChild(container);
    })
}

function seleccionarDibujo(e){

    const idDibujo = parseInt(e.target.dataset.idDibujo);

    const dibujoSeleccionado = listadoDibujos.filter( dibujo => {
        return dibujo.numero === idDibujo
    });

    let objeto
    dibujoSeleccionado.forEach( dibujo => {
        const {imagen, nombre, precio, numero} = dibujo
        objeto  = {
            imagen, nombre, precio, numero, cantidad : 1
        }
    })

    const existeDibujo = carritoCompras.some( dibujo => dibujo.numero === objeto.numero);

    if (existeDibujo) {
        const dibujosCarritoActualizado = carritoCompras.map( dibujo => {
            if (dibujo.numero === objeto.numero) {
                dibujo.cantidad++;
                dibujo.precio += objeto.precio;
                return dibujo;
            }else{
                return dibujo;
            }
        })
    }else{
        carritoCompras = [...carritoCompras, objeto];
    }

    console.log(carritoCompras)
    mostrarCarritoHTML(carritoCompras);
}

function mostrarCarritoHTML(carrito){
    
    const filaDibujo = document.querySelector('fila__dibujo');
    limpiarHTML();
    let totalCompra= 0;

    carrito.forEach( (dibujo, index )=> {
        const {imagen, nombre, numero, precio, tipo, cantidad} = dibujo;
        totalCompra += precio;
        const tr = document.createElement('tr');
        tr.innerHTML = 
            `   <td>${index+1}</td>
                <td class = "imagenCarrito"><img src = ${imagen}></td>
                <td>${nombre}</td>
                <td>${precio}</td>
                <td>${cantidad}</td>
            `
        const td = document.createElement('td');
        const btnEliminar = document.createElement('a');
        btnEliminar.classList.add('btn', 'btn-danger', 'font-weight-bolder')
        btnEliminar.textContent = "X"

        btnEliminar.onclick = () => {
            eliminarDibujoCarrito(numero)
        };

        td.appendChild(btnEliminar);
        tr.appendChild(td)

        listadoCompras.appendChild(tr);
    })

    const totalTr = document.createElement('tr');
    totalTr.innerHTML = 
    `
        <td colspan="3" class = "precio-compra">Total</td>
        <td class = "precio-compra">${totalCompra}</td>
    `
    listadoCompras.appendChild(totalTr);
    guardarLocalStorage(carrito); 
}

function eliminarDibujoCarrito(id){
    const confirmar = confirm('¿Deseas eliminar este dibujo?');
    if (confirmar) {
        carritoCompras = carritoCompras.filter( dibujo => {
            return dibujo.numero !== id
        })
        
        mostrarCarritoHTML(carritoCompras)
    }
}

function limpiarHTML(){
    const listadoCompras = document.querySelector('.listado-compras');
    while (listadoCompras.firstChild) {
        listadoCompras.removeChild(listadoCompras.firstChild);
    }
}

function guardarLocalStorage(carrito){
    localStorage.setItem('listado', JSON.stringify(carrito));
}

function mostrarLocalStorage(){
    carritoCompras = JSON.parse(localStorage.getItem('listado')) || [];
    mostrarCarritoHTML(carritoCompras);
}

