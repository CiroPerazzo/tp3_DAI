import axios from "axios";

async function obtenerPais(nombre) {
  const res = await axios.get(`https://restcountries.com/v3.1/name/${nombre}`);
  const pais = res.data[0];

  console.log("País:", pais.name.common);
  console.log("Capital:", pais.capital[0]);
  console.log("Región:", pais.region);
  console.log("Población:", pais.population);
}

export default obtenerPais