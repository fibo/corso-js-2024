/**
 * Toglie i doppioni dagli array
 *
 * @param {array} lista
 * @return {array} listaDeduplicata
 */
export function unique(list) {
  console.log("ciao, sono unique");

  /*let listaDeduplicata = list.filter((elemento, index, array) => {
    return array.indexOf(elemento) === index;
  });*/

  /*let listaDeduplicata = [];

  for (let elemento of list) {
    if (listaDeduplicata.includes(elemento)) {
    } else {
      listaDeduplicata.push(elemento);
    }
  }*/

  return Array.from(new Set(list));
}
