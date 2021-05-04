// Kata 1

/* Escreva duas funções de teste unitário chamadas testReverseString1 e testReverseString2. Em seguida, escreva uma função chamada reverseString que inverte uma string.
 */

function testReverseString1() {
    let result = reverseString("boy");
    console.assert(result === "yob", "A função está incorreta!");
}
testReverseString1()

function testReverseString2() {
    let result = reverseString("girl");
    console.assert(result === "lrig", "A função está incorreta!")
}
testReverseString2()

function reverseString(str) {
    let newStr = str.split('').reverse().join('');

    return newStr;
}

// Kata 2

/* Escreva duas funções de teste unitário chamadas testReverseSentence1 e testReverseSentence2. Em seguida, escreva uma função chamada reverseSentence que inverte uma frase.Ex:

"bob likes dogs" retorna "dogs likes bob". */

function testReverseSentence1() {
  let result = reverseSentence("bob likes dogs")
  console.assert(result === "dogs likes bob", "A função está incorreta!")
}
testReverseSentence1()

function testReverseSentence2() {
  let result = reverseSentence("Flamengo campeão de tudo")
  console.assert(result === "tudo de campeão Flamengo", "A função está incorreta!")
}
testReverseSentence2()

function reverseSentence(str) {
  let newStr = str.split(' ').reverse().join(' ');

  return newStr;
}

// Kata 3

/* Escreva duas funções de teste unitário chamadas testMinimumValue1 e testMinimumValue2. Em seguida, escreva uma função chamada minimumValue que encontra o valor mínimo de um array. */

function testMinimumValue1() {
  let array = [4, 10, 5, 20, 7]
  let result = minimumValue(array)
  console.assert(result === 4, "A função está incorreta!")
}
testMinimumValue1()

function testMinimumValue2() {
  let array = ["10", "40", "3", "1"]
  let result = minimumValue(array)
  console.assert(result === 1, "A função está incorreta!")
}
testMinimumValue2()

function minimumValue(array) {
  let newStr = array.map(Number).reduce(function (a, b) {
    return Math.min(a, b);
  })

  return newStr;
}

// Kata 4

/* Escreva duas funções de teste unitário chamadas testMaximumValue1 e testMaximumValue2. Em seguida, escreva uma função chamada maximumValue que encontra o valor máximo de um array. */

function testMaximumValue1() {
  let array = [4, 10, 5, 20, 7]
  let result = maximumValue(array)
  console.assert(result === 20, "A função está incorreta!")
}
testMaximumValue1()

function testMaximumValue2() {
  let array = ["10", "40", "3", "1"]
  let result = maximumValue(array)
  console.assert(result === 40, "A função está incorreta!")
}
testMaximumValue2()

function maximumValue(array) {
  let newStr = array.map(Number).reduce(function (a, b) {
    return Math.max(a, b);
  })

  return newStr;
}

// Kata 5

/* Escreva duas funções de teste unitário chamadas testCalculateRemainder1 e testCalculateRemainder2. Em seguida, escreva uma função chamada calculateRemainder que calcula o resto de uma determinada divisão. */

function testCalculateRemainder1() {
  let a = 10
  let b = 2
  let result = calculateRemainder(a, b)
  console.assert(result === 0, "A função está incorreta!")
}
testCalculateRemainder1()

function testCalculateRemainder2() {
  let a = 5
  let b = 3
  let result = calculateRemainder(a, b)
  console.assert(result === 2, "A função está incorreta!")
}
testCalculateRemainder2()

function calculateRemainder(a, b) {
  let result = a % b

  return result;
}

// Kata 6

/* Escreva duas funções de teste unitário chamadas testDistinctValues1 e testDistinctValues2. Em seguida, escreva uma função chamada distinctValues que retorna valores distintos de uma lista. Ex:

"1 3 5 3 7 3 1 1 5" retorna "1 3 5 7" */

function testDistinctValues1() {
  let result = distinctValues([1, 6, 8, 8, 7, 6, 1, 6, 7]).join(' ')
  console.assert(result === "1 6 8 7", "A função está incorreta!")
}
testDistinctValues1()

function testDistinctValues2() {
  let result = distinctValues([1, 3, 5, 3, 7, 3, 1, 1, 5]).join(' ')
  console.assert(result === "1 3 5 7", "A função está incorreta!")
}
testDistinctValues2()

function distinctValues(valores) {
  let uniqueValues = [...new Set(valores)];

  return uniqueValues;
}

// Kata 7

/* Escreva duas funções de teste unitário chamadas testCountValues1 e testCountValues2. Em seguida, escreva uma função chamada countValues que retorna os valores de uma lista e suas ocorrências.Ex:

"1 3 5 3 7 3 1 1 5" retorna "1(3) 3(3) 5(2) 7(1)" que é a quantidade de vezes que os números apareceram na primeira lista. */

function testCountValues1() {
  let result = countValues([1, 6, 8, 8, 7, 6, 1, 6, 7]);
  console.assert(result === "1(2) 6(3) 7(2) 8(2)", "A função está incorreta!")
}
testCountValues1()

function testCountValues2() {
  let result = countValues([1, 3, 5, 3, 7, 3, 1, 1, 5]);
  console.assert(result === "1(3) 3(3) 5(2) 7(1)", "A função está incorreta!")
}
testCountValues2()

function countValues(valores) {
  let uniqueValues = valores.reduce(function(valor, qtd) {
    if (qtd in valor) {
      valor[qtd]++;
    } else {
      valor[qtd] = 1;
    }
    return valor;
  }, {})

  let result = ""
  for (let keys in uniqueValues) {
    result += `${keys}(${uniqueValues[keys]}) `
  }
  return result.trim();
}


// Kata 8

/* Escreva duas funções de teste unitário chamadas testEvaluateExpression1 e testEvaluateExpression2. Em seguida, escreva uma função chamada evaluateExpression que receberá dois parâmetros:

Uma string: Com uma expressão a ser avaliada. Ex: "a + b + c - d";

Um objeto: Com valores que substituira as incógnitas da expressão. Ex: {a: 1, b: 7, c: 3, d: 14}.

O resultado esperado da função evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}) seria -3.

Por exemplo, um teste unitário para o 8º kata poderia se parecer com isso:

function testEvaluateExpression1() {
   let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
   console.assert(result === -3)
} */

function testEvaluateExpression1() {
  let result = evaluateExpression("a * b + c / d", {a: 1, b: 7, c: 4, d: 2});
   console.assert(result === 9);
}

function testEvaluateExpression2() {
  let result = evaluateExpression("a + b + c - d", {a: 3, b: 10, c: 4, d: 6});
  console.assert(result === 11);
}

function evaluateExpression(str, obj) {
  let array = str.split(' ');
  let newStr = '';

  for (i = 0; i < array.length; i++) {
    if (array[i] !== '+' && array[i] !== '-' && array[i] !== '*' && array[i] !== '/') {
      newStr += 'obj.' + array[i];
    } else {
      newStr += array[i];
    }
  }
  return eval(newStr);
}