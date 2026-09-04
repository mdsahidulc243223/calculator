const display = document.getElementById("display");


// Add value to display
function appendValue(value) {

    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } 
    else {
        display.value += value;
    }
}


// Clear display
function clearDisplay() {
    display.value = "0";
}


// Delete last character
function deleteLast() {

    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } 
    else {
        display.value = "0";
    }
}


// Calculate result
function calculate() {

    try {

        let expression = display.value;

        // Convert percentage
        expression = expression.replace(
            /(\d+(?:\.\d+)?)%/g,
            "($1/100)"
        );

        let result = eval(expression);

        if (!isFinite(result)) {
            display.value = "Error";
        } 
        else {
            display.value = result;
        }

    } 
    catch (error) {
        display.value = "Error";
    }
}


// Keyboard input
document.addEventListener("keydown", function(event) {

    const key = event.key;


    // Numbers
    if (key >= "0" && key <= "9") {
        appendValue(key);
    }


    // Operators
    else if (key === "+") {
        appendValue("+");
    }

    else if (key === "-") {
        appendValue("-");
    }

    else if (key === "*") {
        appendValue("*");
    }

    else if (key === "/") {
        appendValue("/");
    }


    // Decimal
    else if (key === ".") {
        appendValue(".");
    }


    // Percentage
    else if (key === "%") {
        appendValue("%");
    }


    // Calculate
    else if (key === "Enter" || key === "=") {
        calculate();
    }


    // Backspace
    else if (key === "Backspace") {
        deleteLast();
    }


    // Clear
    else if (key === "Escape" || key === "Delete") {
        clearDisplay();
    }

});

