//operator functions
const addCalc = (num1, num2) => {
    clearOperator();
    console.log("addition function: " + operator)
    return num1 + num2;}

const multiplyCalc = (num1, num2) => num1 * num2;

let operator = undefined;

let memory = {num1: undefined, num2: undefined, sum: undefined, runningSum: undefined}

let test;//remove this var on next commit

let numberSelection = document.querySelectorAll('.num-btn');

let operatorSelection = document.querySelectorAll('.operator-btn');

let equalsSelection = document.querySelector('.equals-btn');

let clearBtn = document.querySelector('.clear-btn');
console.log(clearBtn);

let calculationComplete = false;

let clearOperator = function () {
    operator = undefined;

}


//user input
numberSelection.forEach((button) => {
    button.addEventListener('click', (e)=> {
        console.log("operator :" + operator)
        //set num1 value
        if (memory.num1 == undefined && operator == undefined) {  
            console.log("num1 first function");
            memory.num1 = e.target.innerText;
            console.log(memory);
            console.log("memory.num1: " + memory.num1);
        }
        //has operator button been pushed? If not, keep appending numbers to store in num 1
        else if (operator == undefined){
            memory.num1 += e.target.innerText;
            console.log("num1 second function");
            console.log(memory);
            console.log(memory.num1);
        }

        //select operater
        operatorSelection.forEach((button) => {
            button.addEventListener('click', (e)=> {
                //call operator function based on id
                operator = e.target.id;
                console.log(`operator = ${operator}`);
            })
        });
        
        //if the operator has been pushed start storing number 2
        if (operator && !calculationComplete) {
            if (memory.num2 == undefined) {
                console.log("num2 first function")
                memory.num2 = e.target.innerText;
                console.log(memory);
            }


            else if (memory.num2!== undefined) {
                console.log("num2 second function")
                memory.num2 += e.target.innerText;
                console.log(memory);
            }
           
            console.log("memory.num2: " + memory.num2);
            console.log("operator: " + operator)
            console.log("calculationComplete: " + calculationComplete)
        }    
    })
});




let operate = function operation (num1, num2, operator){

    if (operator == "add") {
        //check for running total. If present, run addcalc with only single argument
        memory.sum = addCalc(parseInt(memory.num1), parseInt(memory.num2));
        memory.num1 = undefined;
        memory.num2 = undefined;
        memory.runningSum = memory.sum;
        memory.sum = undefined;
        
        console.log(memory);
       
        // return memory.sum; 
    }
    else if (operator === "multiply") {
        console.log("multiply function");
        memory.sum = multiplyCalc(memory.num1, memory.num2);
        memory.num1 = undefined;
        memory.num2 = undefined;
        memory.runningSum = memory.sum;
        memory.sum = undefined;
        console.log(memory);
        // return memory.sum; 
    }
}

equalsSelection.addEventListener('click', function (){
    memory.sum = operate(memory.num1, memory.num2, operator)
    operator = undefined;
    console.log("operator:" + operator);
    console.log("equal has been pressed");
});



function clearCalculator (){
    console.log('go');
    memory.num1 = undefined;
    memory.num2 = undefined;
    memory.sum = undefined;
    memory.runningSum = undefined;
    operator = undefined;
    calculationComplete = true;
};

clearBtn.addEventListener('click', clearCalculator);


//console.log(numberSelection);
