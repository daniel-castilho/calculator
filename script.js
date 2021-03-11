const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awatingNexValue = false;

function sendNumberValue(number) {
    // Replace current display value if first value is entered
    if (awatingNexValue) {
        calculatorDisplay.textContent = number;
        awatingNexValue = false;
    } else {
        // If current display value is 0, replace it, if not add number
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
        displayValue + number;
    }
}

function addDecimal() {
    // If operator pressed, don't add decimal
    if (awatingNexValue) return
    // If no decimal, add one
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

function userOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
    // Assign firstValue if no value
    if (!firstValue) {
        firstValue = currentValue;
    } else {
        console.log('currentValue: ', currentValue);
    }
    // Ready for next value, store operator
    awatingNexValue = true;
    operatorValue = operator;
    console.log('first: ', firstValue);
    console.log('operator: ', operatorValue);
}

// Add Event Listenerts for numbers, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => userOperator(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDecimal());
    }
});

// Reset all values, display
function resetAll() {
    calculatorDisplay.textContent = '0';
    firstValue = 0;
    operatorValue = '';
    awatingNexValue = false;
}

// Event Listener
clearBtn.addEventListener('click', resetAll);