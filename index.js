function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
}

let operator = "";
let firstNum = 0;
let secondNum = 0;

function operate(operator, firstNum, secondNum){
    if (operator === "+")
        return add(firstNum,secondNum);
    else if (operator === "-")
        return subtract(firstNum,secondNum);
    else if (operator === "*")
        return multiply(firstNum,secondNum);
    else if (operator === "/")
        return divide(firstNum,secondNum);
}

const inputContainer = document.createElement('input');
inputContainer.classList.add('inputContainer');
inputContainer.value = "0";
container.appendChild(inputContainer);

let rowOne = ["AC", "+/-", "%", "/"];
let rowTwo = [7, 8, 9, "*"];
let rowThree = [4, 5, 6, "-"];
let rowFour = [1, 2, 3, "+"];
let rowFive = [0, ".", "="];
let number  = 0;
let result = 0;
let string = "";

for (let i = 0; i < 5; i++){
    const smallContainer = document.createElement('div');
    smallContainer.classList.add('smallContainer');
    if (i == 0) {
        for (let j = 0; j < 4; j++){  
            const contentTwo = document.createElement('div');
            contentTwo.classList.add('contentTwo');
            contentTwo.textContent = rowOne[j];
            if (typeof(rowOne[j]) == "number"){
                contentTwo.addEventListener("click", myFunction => {
                    if (parseInt(inputContainer.value.charAt(0)) == 0)
                        inputContainer.value = inputContainer.value.slice(1);
                    inputContainer.value += contentTwo.textContent;
                });
            }
            else if (rowOne[j] == "AC"){
                contentTwo.addEventListener("click", myFunction => {
                    inputContainer.value = "0";
                    number = 0;
                    result = 0;
                })
            }
            if (rowOne[j] == "/"){
                contentTwo.addEventListener("click", myFunction => {
                    number = parseInt(inputContainer.value);
                    operator = "/";                    
                    inputContainer.value = "0";
                });
            }
            smallContainer.appendChild(contentTwo);                 
        }
    }
    if (i == 1){
        for (let j = 0; j < 4; j++){  
            const contentTwo = document.createElement('div');
            contentTwo.classList.add('contentTwo');
            contentTwo.textContent = rowTwo[j];
            if (typeof(rowTwo[j]) == "number"){
                contentTwo.addEventListener("click", myFunction => {
                    if (parseInt(inputContainer.value.charAt(0)) == 0)
                        inputContainer.value = inputContainer.value.slice(1);
                    inputContainer.value += contentTwo.textContent;
                });
            }
            if (rowTwo[j] == "*"){
                contentTwo.addEventListener("click", myFunction => {
                    number = parseInt(inputContainer.value);
                    operator = "*";
                    inputContainer.value = "0";
                });
            }
            smallContainer.appendChild(contentTwo);                 
        }
    }
    if (i == 2){
        for (let j = 0; j < 4; j++){  
            const contentTwo = document.createElement('div');
            contentTwo.classList.add('contentTwo');
            contentTwo.textContent = rowThree[j];
            if (typeof(rowThree[j]) == "number"){
                contentTwo.addEventListener("click", myFunction => {
                    if (parseInt(inputContainer.value.charAt(0)) == 0)
                        inputContainer.value = inputContainer.value.slice(1);
                    inputContainer.value += contentTwo.textContent;
                });
            }
            if (rowThree[j] == "-"){
                contentTwo.addEventListener("click", myFunction => {
                    number = parseInt(inputContainer.value);
                    operator = "-";
                    inputContainer.value = "0";
                });
            }
            smallContainer.appendChild(contentTwo);                
        }
    }
    if (i == 3){
        for (let j = 0; j < 4; j++){  
            const contentTwo = document.createElement('div');
            contentTwo.classList.add('contentTwo');
            contentTwo.textContent = rowFour[j];
            if (typeof(rowFour[j]) == "number"){
                contentTwo.addEventListener("click", myFunction => {
                    if (parseInt(inputContainer.value.charAt(0)) == 0)
                        inputContainer.value = inputContainer.value.slice(1);
                    inputContainer.value += contentTwo.textContent;
                })
            }
            if (rowFour[j] == "+"){
                contentTwo.addEventListener("click", myFunction => {
                    operator = "+";
                    number = parseInt(inputContainer.value);
                    inputContainer.value = "0";
                });
            }
            smallContainer.appendChild(contentTwo); 
        }
    }
    if (i == 4){
        for (let j = 0; j < 3; j++){  
            const contentTwo = document.createElement('div');
            contentTwo.classList.add('contentTwo');
            contentTwo.textContent = rowFive[j];
            if (typeof(rowFive[j]) == "number"){
                contentTwo.addEventListener("click", myFunction  => {
                    if (parseInt(inputContainer.value.charAt(0)) == 0)
                        inputContainer.value = inputContainer.value.slice(1);
                    inputContainer.value += contentTwo.textContent;
                });
            }
            if (rowFive[j] == "="){
                contentTwo.addEventListener("click", myFunction => {
                    result = (operate(operator, number, parseInt(inputContainer.value)));
                    inputContainer.value = result.toString();
                });
            }
            smallContainer.appendChild(contentTwo);                 
        }
    }
    container.appendChild(smallContainer);
}

