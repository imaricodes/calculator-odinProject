//operator functions
const addCalc = (num1, num2) => num1 + num2;

const multiplyCalc = (num1, num2) => num1 * num2;

let num1;
let num2;
let operator;
let solution = 0;
let partialSum = 0;
let calculationComplete = false;

let test;//remove this var on next commit

let numberSelection = document.querySelectorAll('.num-btn');

let operatorSelection = document.querySelectorAll('.operator-btn');

let equalsSelection = document.querySelector('.equals-btn');


//user input
numberSelection.forEach((button) => {
    button.addEventListener('click', (e)=> {
        //set num1
        if (num1 !==undefined) {
            num1 = partialSum;
            
        }

        if (num1 == undefined && calculationComplete == false) {  
            num1 = e.target.innerText;
            console.log("num1: " + num1);
        }
        else if (!operator && calculationComplete == false){
            num1 += e.target.innerText;
            console.log(num1);
        }
        //set num2
        else if (operator && calculationComplete == false) {
            if (num2 == undefined) {
                num2 = e.target.innerText;
            }
            else if (num2!== undefined && calculationComplete == false) {
                num2 += e.target.innerText;
            }
            console.log("num2: " + num2);
        }    
    })
});

//select operater
operatorSelection.forEach((button) => {
    button.addEventListener('click', (e)=> {
        operator = e.target.id;
        console.log(`operator = ${operator}`);
    })
});


let operate = function operation (num1, num2, operator){
    if (operator == "add") {
        //return addCalc(parseInt(num1), parseInt(num2));
       
        return partialSum; 
    }
    else if (operator === "multiply") {
        //return  multiplyCalc(num1, num2);
        
        return partialSum; 
    }

}

equalsSelection.addEventListener('click', function (){
    
    //move this operate function to the end of the number selection listener function, maybe partialSum = operate() instead of 'solution' var
    if (partialSum !== 0) {
        solution = operate(num1, num2, operator) + partialSum;
        
    }
    else solution = operate(num1, num2, operator);
    
    console.log(solution);
   

    //use partialSum to keep a running total to display when 'equals button' is clicked
    console.log("partialSum: " +partialSum);
});

function clearCalculator (){
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    calculationComplete = false;
};

//console.log(numberSelection);
