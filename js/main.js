//llamado a la class titulo-carrito del HTML con querySelector y texto modificado con DOM con la funcion de innerHTML
const encabezado = document.querySelector(".titulo-carrito").innerHTML = "Mirá nuestras mensualidades y catálogo!";
console.log(encabezado);
const totalDelCarrito = document.getElementById("total-carrito");

let nombreCompleto = prompt ("Registrate con tu nombre y apellido.");
console.log ("¡Bienvendo a Fitness Club, " + nombreCompleto + "!");

const edadPersona = 16;
console.log ("¿Qué edad tenés?");
if (edadPersona >= 16){
    let oferta = console.log("Te ofrecemos por $2000 más un pote de creatina UltraTech de 300gr.");
    if (oferta == "si"){
        console.log("Perfecto! Su compra sería por una suma de $5500.");
    }
    else (oferta == "no");{
        console.log("Esta bien ¡A volverse fuerte! ");
    }
}
else (edadPersona < 16); {
    console.log("Sos muy chico, no podes tomar suplementos.");
}
const carritoDeCompras = JSON.parse(localStorage.getItem("carrito")) || [];
const productos = [
{
    id:1, 
    image:"./imagenes/cuota1.jpg",
    title:"Suscripción básica",
    price:2000
},
{
    id:2, 
    image:"./imagenes/cuota1.jpg",
    title:"Suscripción básica",
    price:2000
},
{
    id:3, 
    image:"./imagenes/cuota1.jpg",
    title:"Suscripción básica",
    price:2000
},
{
    id:4, 
    image:"./imagenes/cuota1.jpg",
    title:"Suscripción básica",
    price:2000
},
{
    id:274, 
    image:"./imagenes/cuota1.jpg",
    title:"Suscripción básica",
    price:2000
},
{
    id:384, 
    image:"./imagenes/cuota1.jpg",
    title:"Suscripción básica",
    price:2000
},
{
    id:378, 
    image:"./imagenes/cuota1.jpg",
    title:"Suscripción básica",
    price:2000
},
{
    id:103, 
    image:"./imagenes/cuota1.jpg",
    title:"Suscripción básica",
    price:2000
},
{
    id:736, 
    image:"./imagenes/cuota1.jpg",
    title:"Suscripción básica",
    price:2000
},
{
    id:92, 
    image:"./imagenes/cuota1.jpg",
    title:"Suscripción básica",
    price:2000
},
{
    id:582, 
    image:"./imagenes/cuota1.jpg",
    title:"Suscripción básica",
    price:2000
},
{
    id:17, 
    image:"./imagenes/cuota1.jpg",
    title:"Suscripción básica",
    price:2000
}];
console.log(productos);
/* const renderCarrito = (carrito) => {
	// Se renderiza el carrito cuando
	const html = productos.map((producto) => {
		return `Estilo de la lista que quieras para el popup del carrito`
	})
	SELECTORCONDOM.innerHTML = html 
}
 */
const agregarAlCarrito = (producto) => {
	productos.push(producto)
	localStorage.setItem("carritoDeCompras", JSON.stringify(productos))
	totalDelCarrito.innerHTML = carritoDeCompras.length
	/* renderCarrito(carritoDeCompras) */
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
    productos.forEach((producto)=> {
        const idButton = `add-cart${producto.id}`
        document.querySelector("#seccion-card").innerHTML += `<div class="card d-flex col mb-5">
        <img src="${producto.image}">
        <h5>${producto.title}</h5>
        <p>$${producto.price}</p>
        <button class="btn btn-outline-dark mt-auto" id=${idButton}>Agregar al carrito</button>
        </div>`
    })
    productos.forEach((producto) => {
        const idButton = `add-cart${producto.id}`
        document.getElementById(idButton).addEventListener("click", () => {
            carritoDeCompras.push(producto);
            const precioTotal = carritoDeCompras.reduce((acumulador, producto) => acumulador + producto.price, 0)
            console.log(precioTotal);
            document.getElementById("total-carrito").innerHTML = carritoDeCompras.length + `$ ${precioTotal}`;
            determinarStock(producto)
            Swal.fire(
                'Felicitaciones!',
                'Agregaste el producto correctamente al carrito',
                'success'
            );
        console.log(carritoDeCompras)
        })
    })
    
//DOM
let barraNav = document.querySelectorAll(".nav-link");
console.log(barraNav);
let carrito = document.querySelector(".carritoDeCompras");
console.log(carrito);