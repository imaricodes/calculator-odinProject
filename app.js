//operator functions
const addCalc = (num1, num2) => {
    //clearOperator();
   
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
        //store value in num1 if conditions met
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
                //should operator be set here or in an else block below?
                operator = e.target.id;
                    console.log(`operator = ${operator}`);
                    console.log(memory);
                //first time pressing operation button, sum is undefined, so this block will not execute. If there is a sum, this will execute.
                if (memory.sum !== undefined) {
                    memory.num1 = memory.sum;
                    memory.runningSum = memory.sum;
                    
                    memory.num2 = undefined;
                    //memory.sum = undefined;
                    console.log(memory);
                }
                
                //this starts the calculation of num1 and num2 after each has been entered.. this will run only if there is a value in num2
                if (memory.num2 !==undefined) {
                    console.log('it worked');
                    operate(memory.num1, memory.num2, operator)
                    memory.runningSum = memory.sum;
                    console.log(memory);
                }
                
                //call operator function based on id
                
                    // operator = e.target.id;
                    // console.log(`operator = ${operator}`);
                    // console.log(memory);
                
               
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
           
           
        }    
    })
});




let operate = function operation (num1, num2, operator){

    if (operator == "add") {
        //check for running total. If present, run addcalc with only single argument
        memory.sum = addCalc(parseInt(memory.num1), parseInt(memory.num2));
        //memory.num1 = memory.sum;
        memory.num2 = undefined;
        //don't move sum to running sum or clear 'sum'
        //console.log("move running sum to sum");
        
        //memory.sum = undefined;
        
        console.log(memory);
       
        // return memory.sum; 
    }
    else if (operator === "multiply") {
        console.log("multiply function");
        memory.sum = multiplyCalc(memory.num1, memory.num2);
        memory.num1 = undefined;
        memory.num2 = undefined;
        //don't move sum to running sum or clear 'sum'
        //memory.runningSum = memory.sum;
        //memory.sum = undefined;
        console.log(memory);
        // return memory.sum; 
    }
}

equalsSelection.addEventListener('click', function (){
    console.log("equal has been pressed");
    //if user presses equals key after only entering first number
    console.log(memory);
    if (memory.num1 == undefined || memory.num2 == undefined) {
        memory.num1 = memory.num1;
        console.log(" you have not given me two numbers")
        //console.log(memory);
    } 
    //pressing equals when two numbers present, but no running sum
    else if (memory.runningSum == undefined) {
        console.log('no running sum');
        console.log(memory);
        memory.sum = operate(parseInt(memory.num1), parseInt(memory.num2), operator);
        memory.num2 = undefined;
        console.log(memory);
        
       
    }
    else if (memory.runningSum !==undefined) {
        console.log("there is a running sum. add num 1 and 2")
        console.log(memory);
        memory.sum = operate(parseInt(memory.num1), parseInt(memory.num2), operator);
        console.log(memory);
        memory.sum = undefined;
        memory.num2 = undefined;
        //operator = undefined;
        //console.log(memory);
        
    }
    else {
        //combine memory.num2 and running sum. but operate won't work with undefined num1 ! separate running sum function?
        
    }
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
