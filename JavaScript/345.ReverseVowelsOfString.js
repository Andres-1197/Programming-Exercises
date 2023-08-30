/**
 * @param {string} s
 * @return {string}
 */

// input : mate
// output: meta

var reverseVowels = function (s) {
  const vocales = "aeiouAEIOU";
  // extraer las vocales
  // invierto el orden
  // guardo la posicion donde estaban
  // remplazo en esa posicion
  let vocalesExistentes = [];
  let posicionVocalesExistentes = [];

  const caracteres = s.split("");

  // hacer un tratamiendo de un string
  for (let i = 0; i < s.length; i++) {
    if (vocales.includes(s[i])) {
      vocalesExistentes.push(s[i]);
      posicionVocalesExistentes.push(i);
    }
  }
  vocalesExistentes.reverse();

  for (let i = 0; i < posicionVocalesExistentes.length; i++) {
    caracteres[posicionVocalesExistentes[i]] = vocalesExistentes[i];
  }

  const nuevaCadena = caracteres.join("");

  return nuevaCadena;
};

var result = reverseVowels("mate");
console.log(result);
