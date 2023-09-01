//Given an array of integers nums and an integer target, return indices of the two numbers
// such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the
//same element twice.

//You can return the answer in any order.

function twoSum(nums, target) {
  // Crea un objeto para realizar un seguimiento de los números y sus índices.
  const numMap = {};

  // Recorre el array de números.
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;

    // Verifica si el complemento está en el objeto numMap.
    if (numMap.hasOwnProperty(complement)) {
      // Si se encuentra el complemento, devuelve los índices de los dos números.
      return [numMap[complement], i];
    }

    // Si no se encuentra el complemento, agrega el número actual al objeto numMap junto con su índice.
    numMap[currentNum] = i;
  }

  // Si no se encuentra ninguna solución
  throw new Error("No se encontró una solución.");
}

// Ejemplo de uso:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);
