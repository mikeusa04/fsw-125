/* how to update your node.js
1. go to fsw-125 for ex
2. open its terminal
3. node --version then hit enter
4. it will tell what version you have
5. go to google write node.js
6.open the node.js website and choose the latest version with LTC and follow the steps

In your Week 1 folder, create a folder called ‘math’ for this assignment.
Create a app.js file and a math.js file.
The math.js file should create and export functions for addition, subtraction, multiplication and division.
Import the functions you created in the math.js into the app.js file using require.
In the app.js file, include at least four examples using the math functions (ex. console.log)*/


const mathObj = require('./math')

console.log(mathObj);
console.log(mathObj.sum(5, 2));
console.log(mathObj.subtract(11, 2));
console.log(mathObj.multiply(10, 3));
console.log(mathObj.divide(9, 2));