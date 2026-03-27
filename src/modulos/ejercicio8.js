function analizarTexto(texto) {
  const caracteres = texto.length;
  const palabras = texto.split(" ").length;

  const vocales = (texto.match(/[aeiou]/gi) || []).length;
  const consonantes = (texto.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;

  return { caracteres, palabras, vocales, consonantes };
}


export default analizarTexto
