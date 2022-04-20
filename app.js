//operator functions
const addCalc = (num1, num2) => {
    let result = num1 + num2;
    let resultRounded = roundToTwo(result);
    console.log(resultRounded);
    return resultRounded;}

const multiplyCalc = (num1, num2) => num1 * num2;

let operator = undefined;

let memory = {num1: undefined, num2: undefined, sum: undefined, runningSum: undefined}

let numberSelection = document.querySelectorAll('.num-btn');

let operatorSelection = document.querySelectorAll('.operator-btn');

let equalsSelection = document.querySelector('.equals-btn');

let clearBtn = document.querySelector('.clear-btn');
console.log(clearBtn);

let calculationComplete = false;

clearBtn.addEventListener('click', clearCalculator);

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

//user input
operatorSelection.forEach((button) => {
    button.addEventListener('click', (e)=> {
        //if operation key is pushed before any value for num one and two, operator needs to stay undefined
        // if (memory.num1 == undefined && memory.num2 == undefined) {
        //     console.log('there are zero numbers')
        // }
        //need to do first calculation, then set operator
        if (operator !== undefined && memory.num2 !== undefined) {
            operate(memory.num1, memory.num2, operator);
            console.log('run');
        }

        if (memory.num1 !==undefined){
            operator = e.target.id;
            console.log("new operator: " + operator);
        }
        

        if (memory.num2 == undefined) {
            //operator = undefined;
            console.log('need two sums');
        } 
        else if (memory.num1 !== undefined && memory.num2 !== undefined) {
            operate(memory.num1, memory.num2, operator);
        }
        if (memory.num2 !==undefined) {
            console.log(memory);
        }   
    })
});


numberSelection.forEach((button) => {
    button.addEventListener('click', (e)=> {
        console.log("operator :" + operator)
        if (memory.num1 == undefined && operator == undefined) {  
            memory.num1 = e.target.innerText;
            console.log("memory.num1: " + memory.num1);
            console.log(memory);
        }
        else if (operator == undefined){
            memory.num1 += e.target.innerText;
            console.log(memory.num1);
            console.log(memory);
        }
        // need new metric for 

        //(operator !== undefined && !calculationComplete)
        if (operator !== undefined && !calculationComplete) {
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
        memory.runningSum = addCalc(parseFloat(memory.num1), parseFloat(memory.num2, operator));
        memory.num1 = memory.runningSum;
        memory.num2 = undefined;
        console.log(memory);
    }
    else if (operator === "multiply") {
        memory.runningSum = multiplyCalc(parseFloat(memory.num1), parseFloat(memory.num2, operator));
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
        //console.log(memory);
    } 
    //pressing equals when two numbers present, but no running sum
    else if (memory.runningSum == undefined) {
        console.log('no running sum');
        console.log(memory);
        memory.sum = operate(parseFloat(memory.num1), parseFloat(memory.num2), operator);
        memory.num2 = undefined;
        console.log(memory);
        
    }
    else if (memory.runningSum !==undefined) {
        console.log("there is a running sum. add num 1 and 2")
        console.log(memory);
        memory.sum = operate(parseFloat(memory.num1), parseFloat(memory.num2), operator);
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
    console.log(memory);
};



