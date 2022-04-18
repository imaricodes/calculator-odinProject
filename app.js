//operator functions
const addCalc = (num1, num2) => num1 + num2;

const multiplyCalc = (num1, num2) => num1 * num2;

let operator;

let memory = {num1: undefined, num2: undefined, sum: undefined}

let test;//remove this var on next commit

let numberSelection = document.querySelectorAll('.num-btn');

let operatorSelection = document.querySelectorAll('.operator-btn');

let equalsSelection = document.querySelector('.equals-btn');

let clearBtn = document.querySelector('.clear-btn');
console.log(clearBtn);

console.log(memory);

//user input
numberSelection.forEach((button) => {
    button.addEventListener('click', (e)=> {

        //set num1 value
        if (memory.num1 == undefined) {  
            memory.num1 = e.target.innerText;
            console.log("memory.num1: " + memory.num1);
        }
        //has operator button been pushed? If not, keep appending numbers to store in num 2
        else if (!operator){
            memory.num1 += e.target.innerText;
            console.log(memory.num1);
        }
        //if the operator has been pushed start storing number 2
        else if (operator) {
            if (memory.num2 == undefined) {
                memory.num2 = e.target.innerText;
            }
            else if (memory.num2!== undefined) {
                memory.num2 += e.target.innerText;
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
        sum = addCalc(parseInt(num1), parseInt(memory.num2));
       
        return sum; 
    }
    else if (operator === "multiply") {
        sum = multiplyCalc(num1, memory.num2);
        
        return sum; 
    }

}

equalsSelection.addEventListener('click', function (){
    sum = operate(memory.num1, memory.num2, operator)
    console.log("sum: " + sum);
});



function clearCalculator (){
    console.log('go');
    memory.num1 = undefined;
    memory.num2 = undefined;
    operator = undefined;
    //calculationComplete = false;
};

clearBtn.addEventListener('click', clearCalculator);


//console.log(numberSelection);
