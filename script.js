const calculator = document.createElement("div");
calculator.className = "calculator";
document.body.appendChild(calculator);

const display = document.createElement("input");
display.type = "Number";
calculator.appendChild(display);

const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "c", "0", "+", "="
];

let firstNumber = "";
let operator = "";

buttons.forEach(value => {
    const button = document.createElement("button");

    button.textContent = value;
    calculator.appendChild(button);

    button.addEventListener("click", () => {

        if (value === "C") {
            display.value = "";
            firstNumber = "";
            operator = "";
        }

        else if (["+", "-", "*", "/"].includes(value)) {
            firstNumber = Number(display.value);
            operator = value;
            display.value = "";
        }

        else if (value === "=") {
            const secondNumber = Number(display.value);
            let result;

            if (operator === "+") {
                result = firstNumber + secondNumber;
            } else if (operator === "-") {
                result = firstNumber - secondNumber;
            } else if (operator === "*") {
                result = firstNumber * secondNumber;
            } else if (operator === "/") {
                result = firstNumber / secondNumber;
            }

            display.value = result;
        }
        
        else {
            display.value += value;
        }
    });
});