
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
const carritoDeCompras = [];
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

productos.forEach((producto)=> {
    const idButton = `add-cart${producto.id}`
    document.querySelector("#seccion-card").innerHTML += `<div class="card d-flex col mb-5">
    <img src="${producto.image}">
    <h5>${producto.title}</h5>
    <p>${producto.price}</p>
    <button class="btn btn-outline-dark mt-auto" id=${idButton}>Agregar al carrito</button>
    </div>`
})
productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById(idButton).addEventListener("click", () => {
    alert("agregaste un producto al carrito");
    productos.push(producto);
    document.getElementById("total-carrito").innerHTML = carritoDeCompras.length;
    console.log(carritoDeCompras);
    
    })
})
//determinar stock
if(productos >= 1){
    console.log("El producto ha sido agregado correctamente al carrito.")
}
else(productos < 1);{
    console.log("No disponemos de stock en este momento, lo sentimos.")
};
//totalidad del carrito con storage
localStorage.setItem("totalCarrito", carritoDeCompras.lenght);
const totalCarrito = localStorage.getItem("totalCarrito");

//Creo un function para simular la opcion de eliminar un producto del carrito
 function eliminarDelCarrito (idDelProducto){
const index= productos.findIndex((borrar) => borrar.id === idDelProducto);
if (index !== -1){
    productos.splice(index, 1);
}
console.log(index);
}
//DOM
let barraNav = document.querySelectorAll(".nav-link");
console.log(barraNav);

let carrito = document.querySelector(".carritoDeCompras");
console.log(carrito);

//llamado a la class titulo-carrito del HTML con querySelector y texto modificado con DOM con la funcion de innerHTML
let encabezado = document.querySelector(".titulo-carrito").innerHTML = "Mirá nuestras mensualidades y catálogo!";
console.log(encabezado);

let listaVacia = document.querySelector("#listaVacia");

let indumentaria = [
    {id: 1, name:"Musculosa Adidas", price:"$3000"},
    {id: 2, name:"Zapatillas Nike", price:"$12000"},
    {id: 3, name:"Camiseta Racing Club", price:"$10500"}
];

for(let nuevosProductos of indumentaria) {
    let ropa = document.createElement("div");
    ropa.innerHTML = `<h3>${nuevosProductos.name}</h3>
    <p>${nuevosProductos.price}</p>`;
    listaVacia.appendChild(ropa);
};

