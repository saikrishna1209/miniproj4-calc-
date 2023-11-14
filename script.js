let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}
function backspace() {
    let currentDisplay = display.value;
    display.value = currentDisplay.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(display.value);
        // Round the result to 2 decimal places for precision
        result = Math.round(result * 100) / 100;
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
