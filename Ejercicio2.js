import fs from "fs";

export default function agregarProducto(nombre, precio) {
  const data = fs.readFileSync("productos.json", "utf-8");
  const productos = JSON.parse(data);

  productos.push({ nombre, precio });

  fs.writeFileSync("productos.json", JSON.stringify(productos, null, 2));
}