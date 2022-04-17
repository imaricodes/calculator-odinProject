const addCalc = (num1, num2) => num1 + num2;

const multiplyCalc = (num1, num2) => num1 * num2;

let num1 = parseInt(2);
let num2 = parseInt(3);
let operator = "add";

let sum;


let operate = function operation (num1, num2, operator){
    if (operator === "add") {
        sum = addCalc(num1, num2);
        return sum; 
    }
    else if (operator === "multiply") {
        sum = multiplyCalc(num1, num2);
        return sum; 
    }
}

console.log(operate(num1, num2, operator));

