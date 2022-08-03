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
//Carrito de compras

//Funcion para construir el carrito
function agregarAlCarrito (id, name, price) {
    this.id = id
    this.name = name
    this.price = price
}

//Creación de un array vacío
const productos = [];


//Llamado a la función para crear el nuevo objeto "agregarAlCarrito"
const cuota1 = new agregarAlCarrito (1, "Suscripción básica", 2000); 
const cuota2 = new agregarAlCarrito (2, "Suscripción fitness", 2500);
const cuota3 = new agregarAlCarrito (3, "Suscripción premium", 3000);
const cuota4 = new agregarAlCarrito (4, "Suscripción gold", 3500);
const producto1 = new agregarAlCarrito (274, "Whey Protein ENA", 4000); 
const producto2 = new agregarAlCarrito (293, "Best Protein BPI Sports", 6000); 
const producto3 = new agregarAlCarrito (293, "Best Fruit Creatine SPX", 2500); 
const producto4 = new agregarAlCarrito (293, "Ultratech Creatine", 3000); 
const producto5 = new agregarAlCarrito (187, "Pre Workout Gold", 2500);
const producto6 = new agregarAlCarrito (128, "Aminoácidos ON", 4500);  
const producto7 = new agregarAlCarrito (451, "Mass Gainer ENA", 2800); 
const producto8 = new agregarAlCarrito (172, "Keto Weight Loss BPI Sports", 3100); 

productos.push(cuota1, cuota2, cuota3, cuota4, producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8); 
console.log(productos);
//Declaro un for para determinar el stock e if y return para determinar 2 posibilidades de stock

if(productos >= 1){
    console.log("El producto ha sido agregado correctamente al carrito.")
}
else(productos < 1);{
    console.log("No disponemos de stock en este momento, lo sentimos.")
} 
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

let productosCarrito = document.querySelectorAll(".nombre-producto");
console.log(productosCarrito);

let imagenProducto = document.querySelectorAll(".card-img-top");
console.log(imagenProducto);

let botonCompra = document.querySelectorAll(".btn");
console.log(botonCompra);

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

document.querySelector("#carrito")
productos.addEventListener("click", agregar);
function agregar(){
    console.log("Agregaste" + productos + "correctamente")
};
