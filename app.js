//operator functions
const addCalc = (num1, num2) => num1 + num2;

const multiplyCalc = (num1, num2) => num1 * num2;

let operator;

let memory = {num1: undefined, num2: undefined, sum: undefined, runningSum: undefined}

let test;//remove this var on next commit

let numberSelection = document.querySelectorAll('.num-btn');

let operatorSelection = document.querySelectorAll('.operator-btn');

let equalsSelection = document.querySelector('.equals-btn');

let clearBtn = document.querySelector('.clear-btn');
console.log(clearBtn);

let calculationComplete = false;



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
        //has operator button been pushed? If not, keep appending numbers to store in num 2
        else if (operator == undefined){
            memory.num1 += e.target.innerText;
            console.log("num1 second function");
            console.log(memory);
            console.log(memory.num1);
        }
        //if the operator has been pushed start storing number 2
        else if (operator && !calculationComplete) {
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
    // memory.num1 = undefined;
    // memory.num2 = undefined;
    // console.log(memory);
    operator = undefined;
    console.log("operator:" + operator);
    console.log("equal has been pressed");
});



function clearCalculator (){
    console.log('go');
    memory.num1 = undefined;
    memory.num2 = undefined;
    memory.sum = undefined;
    operator = undefined;
    calculationComplete = true;
};

clearBtn.addEventListener('click', clearCalculator);


//console.log(numberSelection);
