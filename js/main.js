//llamado a la class titulo-carrito del HTML con querySelector y texto modificado con DOM con la funcion de innerHTML
const encabezado = document.querySelector(".titulo-carrito").innerHTML = "Mirá nuestras mensualidades y catálogo!";
console.log(encabezado);

const totalDelCarrito = document.getElementById("total-carrito");

const carritoDeCompras = JSON.parse(localStorage.getItem("carrito")) ?? [];
const precioTotal = carritoDeCompras.reduce((acumulador, producto) => acumulador + producto.price, 0);
document.getElementById("total-carrito").innerHTML = `${carritoDeCompras.length} - $${precioTotal}`;

 const productos = []
console.log(productos); 

const agregarAlCarrito = (producto) => {
	productos.push(producto)
	localStorage.setItem("carritoDeCompras", JSON.stringify(productos))
	totalDelCarrito.innerHTML = carritoDeCompras.length
}

//Determino stock
const determinarStock = (producto) => {
	if (producto.stock > 0) {
		Swal.fire(
            'Felicitaciones!',
            'Agregaste el producto correctamente al carrito',
            'OK'
          )
	} else {
		agregarAlCarrito(producto)
	}
}

//Creo un function para simular la opcion de eliminar un producto del carrito
function eliminarDelCarrito(idDelProducto) {
    const index = productos.findIndex((borrar) => borrar.id === idDelProducto)
    if (index !== -1) {
        productos.splice(index, 1)
        localStorage.setItem("carritoDeCompras", JSON.stringify(productos))
        } console.log(index)
    }
    
fetch("productos.json")
    .then((response) => response.json())
    .then((productos) => {
        productos.forEach((producto)=> {
        const idButton = `add-cart${producto.id}`
        document.getElementById("cards-modal").innerHTML += `<div class="modal-texto">`
        document.querySelector("#seccion-card").innerHTML += `<div class="card d-flex col mb-5">
        <img src="${producto.image}">
        <h4>${producto.title}</h4>
        <h6>${producto.description}</h6>
        <p>$${producto.price}</p>
        <button class="btn btn-outline-dark mt-auto" id=${idButton}>Agregar al carrito</button>
        </div>`
    })
    

    productos.forEach((producto) => {
        const idButton = `add-cart${producto.id}`
        document.getElementById(idButton).addEventListener("click", () => {
            carritoDeCompras.push(producto);
            const precioTotal = carritoDeCompras.reduce((acumulador, producto) => acumulador + producto.price, 0);
            console.log(precioTotal);
            document.getElementById("total-carrito").innerHTML = `${carritoDeCompras.length} - $${precioTotal}`;
            
            determinarStock(producto)
            Swal.fire(
                'Felicitaciones!',
                'Agregaste el producto correctamente al carrito',
                'success'
            );
        console.log(carritoDeCompras)
        })
    })
    })
//DOM
let barraNav = document.querySelectorAll(".nav-link");
console.log(barraNav);
let carrito = document.querySelector(".carritoDeCompras");
console.log(carrito);