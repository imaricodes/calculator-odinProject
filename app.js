const addCalc = (num1, num2) => num1 + num2;

const multiplyCalc = (num1, num2) => num1 * num2;

let num1;
let num2;
let operator;

let sum;



let numberSelection = document.querySelectorAll('.num-btn');

let operatorSelection = document.querySelectorAll('.operator-btn');

numberSelection.forEach((button) => {
    button.addEventListener('click', (e)=> {
        num1 = parseInt(e.target.innerText);
        //console.log(typeof (num1));
        console.log(`num 1 = ${num1}`);
        // console.log(e.target.id);
    })
});

operatorSelection.forEach((button) => {
    button.addEventListener('click', (e)=> {
        operator = e.target.id;
        console.log(`operator = ${operator}`);
    })
});


console.log(numberSelection);


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




// console.log(operate(num1, num2, operator));
// console.log(sum+= 2);
// console.log(sum);

