// Write a function that returns the product of 2 numbers
function product(x, y) {
  resultado = x * y;
  return resultado;
}

product(10, 5);

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num%2 == 0){
    return true;
  }
  else{
    return false;
  }
}

isEven(4);

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b){
    return a;
  }
  else{
    return b;
  }
}

maxOfTwoNumbers(2, 5);

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
if (a > b){
  if(a > c){
    return a;
  }
  else{
    return c;
  }
}
else if(b > a){
    if(b > c){
      return b;
    }
    else{
      return c;
    }
}
else{
  return c;
}
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (numbers.length== 0){
    return 0;
  }
  else{
    let resultado = 0;
    for (let i=0; i < numbers.length; i++){
      resultado += numbers[i];
    }
    return resultado;
  }
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  var MaxValue = numbers[0];
  for (let i = 0; i < numbers.length; i++){
    let valor = numbers[i];
    if (valor > MaxValue){
      MaxValue = valor;
    }
  }
  return MaxValue;
}

// Return the longest string in an array
function longestString(strings) {
   var palabraMasLarga = "";
   for (let i=0; i < strings.length; i++){
     let palabra = strings[i];
     if(palabra.length > palabraMasLarga.length){
       palabraMasLarga = palabra;
     }
   }
   return palabraMasLarga;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
