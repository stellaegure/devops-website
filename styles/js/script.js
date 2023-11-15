// large-script.js

function calculateSquare(num) {
return num * num;
}

function calculateCube(num) {
return num * num * num;
}

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sumArray(numbers) {
return numbers.reduce((acc, num) => acc + num, 0);
}

function createRandomArray(length) {
const randomArray = [];
for (let i = 0; i < length; i++) {
    randomArray.push(generateRandomNumber(1, 100));
}
return randomArray;
}

function performComplexCalculation() {
const randomArray = createRandomArray(1000);
const squaredArray = randomArray.map(calculateSquare);
const cubedArray = randomArray.map(calculateCube);
const sumSquared = sumArray(squaredArray);
const sumCubed = sumArray(cubedArray);

return { sumSquared, sumCubed };
}

// Repeated functions for demonstration purposes
function repeatFunction1() {
console.log("Function 1");
}

function repeatFunction2() {
console.log("Function 2");
}

// Add more functions as needed
createRandomArray(25000);
performComplexCalculation();
