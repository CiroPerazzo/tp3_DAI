import fs from "fs";


const data = fs.readFileSync("productos.json", "utf-8");
const productos = JSON.parse(data);

console.log(productos);
/*import agregarProducto from "./Ejercicio2.js";
agregarProducto("termardium", 14500)*/

import dias from "./Ejercicio3.js";
let datos = dias
console.log(datos.fecha)


import obtenerPais from "./ejercicio4.js";
obtenerPais("Argentina");
