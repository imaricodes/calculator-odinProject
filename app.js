//operator functions
const addCalc = (num1, num2) => {
    let result = parseFloat(num1) + parseFloat(num2);
    let resultRounded = roundToTwo(result);
    return resultRounded;}

const multiplyCalc = (num1, num2) => {
    let result = parseFloat(num1) * parseFloat(num2);
    let resultRounded = roundToTwo(result);
    console.log(resultRounded);
    return resultRounded;}

const minusCalc = (num1, num2) => {
    let result = parseFloat(num1) - parseFloat(num2);
    let resultRounded = roundToTwo(result);
    console.log(resultRounded);
    return resultRounded;}

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

let operator = undefined;



//sum key/value might not be needed
let memory = {num1: undefined, num2: undefined, sum: undefined, runningSum: undefined}

let numberSelection = document.querySelectorAll('.num-btn');

let operatorSelection = document.querySelectorAll('.operator-btn');

let equalsSelection = document.querySelector('.equals-btn');

let clearBtn = document.querySelector('.clear-btn');
console.log(clearBtn);

let calculationComplete = false;

clearBtn.addEventListener('click', clearCalculator);

let display = document.querySelector('.display');



display.innerText = "0";

//Memory Object States
let objectState = ()=> {
    //memory object state 0
    if (
        memory.num1 == undefined && 
        memory.num2 == undefined &&
        memory.operator == undefined && 
        memory.runningSum == undefined) {
        return true;
    }
    //memory object state 1
    else if (
        memory.num1 !== undefined && 
        memory.num2 == undefined &&
        runningSum == undefined &&  
        operator == !undefined) {
        return true;
    }
     //memory object state 2
     else if (
        memory.num1 !== undefined && 
        memory.num2 == undefined && 
        memory.runningSum == undefined && 
        operator !== undefined 
        ) 
        {
        return true;
    }
     //memory object state 3
     else if (
        memory.num1 !== undefined && 
        memory.num2 !== undefined && 
        memory.runningSum == undefined &&
        operator !== undefined ) {
        return true;
    }

     //memory object state 4
     else if (
        memory.num1 !== undefined && 
        memory.num2 !== undefined && 
        memory.runningSum == undefined &&
        operator == undefined ) {
        return true;
    }

       //memory object state 5
       else if (
        memory.num1 !== undefined && 
        memory.num2 == undefined && 
        memory.runningSum !== undefined &&
        operator == undefined ) {
        return true;
    }

}




//user input
operatorSelection.forEach((button) => {
    button.addEventListener('click', (e)=> {
        if (objectState) {
            operator = undefined;
            console.log("nothing to calculate")  
        }

        else if (memory.num1 !== undefined && memory.num2 == undefined) {
            operator = e.target.id;
            console.log(operator);
        }

        else if (memory.num1 !== undefined && memory.num2 !== undefined) {
            console.log("num1 and num2 present... do calculation")
            operate(memory.num1, memory.num2, operator);
            console.log(memory);              
        }

         else if (memory.num1 !== undefined && memory.num2 == undefined) {
            operator = e.target.id;
            console.log('num1 is defined, num2 is not - setting operator and moving on to define num2')
        }

        // else if (memory.num1 !== undefined && memory.num2 !== undefined) {
        //     memory.runningSum = operate(memory.num1, memory.num2, operator);
        // }

        // if (memory.num1 !== undefined) {
        //     console.log('num1 is defined, num2 is not - setting operator and moving on to define num2')
        // }


        // if (operator !== undefined && memory.num2 !== undefined) {
        //     operate(memory.num1, memory.num2, operator);
        //     display.innerText = memory.runningSum.toString();
        //     console.log('run');
        // }

        // if (memory.num1 !==undefined){
        //     operator = e.target.id;
        //     console.log("new operator: " + operator);
        // }

        // if (memory.num2 == undefined) {
        //     //operator = undefined;
        //     console.log('need two sums');
        // } 
       
        // if (memory.num2 !==undefined) {
        //     console.log(memory);
        // }   
    })
});

//NUMBER SELECTION
numberSelection.forEach((button) => {
    button.addEventListener('click', (e)=> {
        console.log("operator :" + operator)
        if (memory.num1 == undefined && memory.num2 == undefined) {  
            memory.num1 = e.target.innerText;
            console.log("memory.num1: " + memory.num1);
            display.innerText = memory.num1.toString();
            console.log(memory);
        }
        else if (memory.num1 !==undefined && operator == undefined){
            memory.num1 += e.target.innerText;
            display.innerText = memory.num1.toString();
            console.log(memory.num1);
            console.log(memory);
        }

        //(operator !== undefined && !calculationComplete)
        if (memory.num1 !== undefined && operator !== undefined) {

            if (memory.num2 == undefined) {
                console.log("num2 first function")
                memory.num2 = e.target.innerText;
                display.innerText = memory.num2.toString();
                console.log(memory);
            }
            else if (memory.num2!== undefined) {
                console.log("num2 second function")
                console.log(operator);
                memory.num2 += e.target.innerText;
                display.innerText = memory.num2.toString();
                console.log(memory);
            }
        }    
    })
});


let operate = function operation (num1, num2, operator){
    console.log(operator);
    if (operator == "add") {
        memory.runningSum = addCalc(memory.num1, memory.num2);
        memory.num1 = memory.runningSum;
        memory.num2 = undefined;
        console.log(memory);
    }
    else if (operator == "multiply") {
        memory.runningSum = multiplyCalc(memory.num1, memory.num2, operator);
        memory.num1 = memory.runningSum;
        memory.num2 = undefined;
        console.log(memory);
    }
    else if (operator == "minus") {
        memory.runningSum = minusCalc(memory.num1, memory.num2, operator);
        memory.num1 = memory.runningSum;
        memory.num2 = undefined;
        console.log(memory);
    }
}

equalsSelection.addEventListener('click', function (){
    console.log("equal has been pressed");
    //if user presses equals key after only entering first number
    console.log(memory);
    if (memory.num1 == undefined || memory.num2 == undefined) {
        memory.num1 = memory.num1;
        console.log(" you have not given me two numbers")
    } 
    //pressing equals when two numbers present, but no running sum
    
    else if (memory.num1 !== undefined && memory.num2 !== undefined && memory.runningSum == undefined) {
        
        console.log('no running sum, combine num1 and num2');
        operate(memory.num1, memory.num2, operator);
        console.log(memory);
        console.log("ham: " + memory.runningSum);

        display.innerText = memory.runningSum.toString();
        memory.num2 = undefined;
        console.log(memory);
        
    }
    else if (memory.runningSum !==undefined) {
        console.log("there is a running sum. add num 1 and 2")
        console.log(memory);
        operate(memory.num1, memory.num2, operator);
        display.innerText = memory.runningSum.toString();
        console.log("memory display = " + display)
        console.log(memory);
        memory.sum = undefined;
        memory.num2 = undefined;   
    }
});


function clearCalculator (){
    console.log('go');
    memory.num1 = undefined;
    memory.num2 = undefined;
    memory.sum = undefined;
    memory.runningSum = undefined;
    operator = undefined;
    display.innerText = "0";
    
    console.log(memory);
};



