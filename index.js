import fs from "fs";


const data = fs.readFileSync("productos.json", "utf-8")
const productos = JSON.parse(data)

console.log(productos);
import agregarProducto from "./src/modulos/Ejercicio2.js"
agregarProducto("mateardo", 14500)

import dias from "./src/modulos/Ejercicio3.js"

const datos = dias()
console.log(datos.fecha)
console.log(datos.horaCompleta)




import obtenerPais from "./src/modulos/ejercicio4.js"
obtenerPais("Argentina");


import buscarProducto from "./src/modulos/ejercicio5.js"
buscarProducto("Mouse")


const leer = fs.readFileSync("productos.json", "utf-8")
const products = JSON.parse(leer)

let csv = "nombre,precio\n";

products.forEach(p => {
  csv += `${p.nombre},${p.precio}\n`
})

fs.writeFileSync("productos.csv", csv)

import intervalo from "./src/modulos/ejercicio7.js"

import analizarTexto from "./src/modulos/ejercicio8.js";
console.log(analizarTexto("Hola mundo"));


import validarPassword from "./src/modulos/ejercicio9.js";
validarPassword("podaKhon67");

