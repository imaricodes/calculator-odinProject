//operator functions
const addCalc = (num1, num2) => num1 + num2;

const multiplyCalc = (num1, num2) => num1 * num2;

let num1;
let num2;
let operator;
let sum;
let result = false;
let test;



let numberSelection = document.querySelectorAll('.num-btn');

let operatorSelection = document.querySelectorAll('.operator-btn');

let equalsSelection = document.querySelector('.equals-btn');



numberSelection.forEach((button) => {
    button.addEventListener('click', (e)=> {
            //set num1
            if (num1 == undefined && result == false) {  
                num1 = e.target.innerText;
                console.log("num1: " + num1);
            }
            else if (!operator && result == false){
                num1 += e.target.innerText;
                console.log(num1);
            }
            //set num2
            else if (operator && result == false) {
                if (num2 == undefined) {
                    num2 = e.target.innerText;
                }
                else if (num2!== undefined && result == false) {
                    num2 += e.target.innerText;
                }
                
                console.log("num2: " + num2);
            }
    })
});


operatorSelection.forEach((button) => {
    button.addEventListener('click', (e)=> {
        operator = e.target.id;
        console.log(`operator = ${operator}`);
    })
});


let operate = function operation (num1, num2, operator){
    if (operator == "add") {
        sum = addCalc(parseInt(num1), parseInt(num2));
        return sum; 
    }
    else if (operator === "multiply") {
        sum = multiplyCalc(num1, num2);
        return sum; 
    }
}

equalsSelection.addEventListener('click', function (){
    
    let solution = operate(num1, num2, operator);
    console.log(solution);
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    result = false;
    console.log("sum: " +sum);
});


console.log(numberSelection);
