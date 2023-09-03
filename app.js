// Initialize a variable to store the current calculation
let calculation = '';

// Function to update the display
function updateDisplay() {
    document.getElementById('display').value = calculation;
}

// Function to append characters to the calculation
function appendToDisplay(char) {
    calculation += char;
    updateDisplay();
}

// Function to clear the display
function clearDisplay() {
    calculation = '';
    updateDisplay();
}

// Function to perform the calculation
function calculate() {
    try {
        calculation = eval(calculation);
        updateDisplay();
    } catch (error) {
        calculation = 'Error';
        updateDisplay();
    }
}
