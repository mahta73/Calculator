"use strict"

// get all the buttons
const buttons = document.querySelectorAll('button');

// get the input 
const input = document.querySelector('input');

// add event listener to an array of buttons
function addEventListenerToArray(list, event, fc) {
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener(event, () => fc(list[i].value), false);
    }
}

// apply addEventListener to each numberButton and get the value of the clicked button

// get the number buttons
const numberButtons = document.getElementsByClassName('num');

function inputValueUpdated(updatedValue) {
    input.value = input.value.concat(updatedValue);
}

addEventListenerToArray(numberButtons, 'click', inputValueUpdated);

// apply addEventListener to each operatinal and get the value of the clicked button

// get operation buttons
const operationButtons = document.getElementsByClassName('operatinNums');

function operationAdded(updatedValue) {
    input.value = input.value.concat(' ' + updatedValue + ' ');
}

addEventListenerToArray(operationButtons, 'click', operationAdded);

// Clear the input
const clear = document.getElementById('clear');
clear.addEventListener('click', () => location.reload());

// CE -> remove the last element of the input
const CE = document.getElementById('ce');

let deleteTheLast = () => {
    if (input.value.slice(input.value.length - 1) == ' ') {
        for (let i = 0; i < 3; i++) {
            input.value = input.value.slice(0, -1)
        }
    } else {
        input.value = input.value.slice(0, -1);
    }
}

CE.addEventListener('click', deleteTheLast);

// when = is clicked store the input in userInputTextForm p element
const userInputTextForm = document.getElementById('userInputTextForm');
const equalSign = document.getElementById('equalSign');


let storeInput = () => {
    const finalAns = document.getElementById('finalAns');
    // store the user input in userInputTextForm p element
    userInputTextForm.innerHTML = input.value;

    // calculate the answer
    let ans = 0;
    input.value = eval(input.value);
    finalAns.innerHTML = input.value;
    
    
}

equalSign.addEventListener('click', storeInput);

// + (addition)
// const addition = document.getElementById('addition');

// let add = (num1, num2) => num1 + num2;
