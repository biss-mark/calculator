const figures = document.querySelectorAll('.chiffre')
const operators = document.querySelectorAll('.operator')
const actions = document.querySelectorAll('.action')
const coma = document.querySelector('.coma')

let operationDiv = document.querySelector('.operation')
let resultDiv = document.querySelector('.result')

let operation = '0';
let result = '0';

operationDiv.textContent = operation;
resultDiv.textContent = result;

figures.forEach(figure => {
    figure.addEventListener('click', () => {
        if (operation === '0' && figure.textContent === '0') {
            return;
        } else {
            operation += figure.textContent;
        }
        operationDiv.textContent = operation;
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (operation.slice(-1) == '.') {
            //nothing
        } else if (operation.slice(-1) != '/' && operation.slice(-1) != '*' && operation.slice(-1) != '-' && operation.slice(-1) != '+') {
            operation += operator.textContent;
        } else {
            operation = operation.slice(0, -1);
            operation += operator.textContent;
        }

        if (operation.slice(-1) == '=') {
            operation = operation.slice(0, -1);
            result = eval(operationDiv.textContent);
        }


        resultDiv.textContent = result;
        operationDiv.textContent = operation;
    });
});

actions.forEach(action => {
    action.addEventListener('click', () => {
        let lastChar = operation.slice(-1);

        if (action.textContent == 'AC') {
            operation = '0';
            result = '0';
        }

        if (action.textContent == "") {
            operation = operation.slice(0, -1);
            if (operation === '') {
                operation = '0';
            }
        }

        if (action.textContent == '()') {
            let parenthesisOpen = operation.split('').filter(open => open === '(').length;
            let parenthesisClose = operation.split('').filter(close => close === ')').length;

            if (lastChar === '/' || lastChar === '*' || lastChar === '-' || lastChar === '+' || lastChar === '(') {
                operation += '(';
            } else if (lastChar !== '/' && lastChar !== '*' && lastChar !== '-' && lastChar !== '+' && lastChar !== ')') {
                if (parenthesisOpen > parenthesisClose) {
                    operation += ')';
                }
            } else if (parenthesisOpen > parenthesisClose) {
                operation += ')';
            } else {
                operation += '(';
            }
        }

        if (action.textContent == '%') {
            result = operation / 100;
        }

        if (action.textContent == '+/-') {
            if (operation.slice(0, 1) == '-') {

                operation = operation.slice(-(operation.length - 1), operation.length);

            } else {

                operation = '-' + operation;

            }
        }

        resultDiv.textContent = result;
        operationDiv.textContent = operation;
    });
});

coma.addEventListener('click', () => {

    let lastChar = operation.slice(-1)

    if (lastChar == '/' || lastChar == '*' || lastChar == '-' || lastChar == '+' || lastChar == '(') {
        operation += '0.';
    }
    if (lastChar !== '/' && lastChar !== '*' && lastChar !== '-' && lastChar !== '+') {
        let operationLength = operation.length;
        let length = '';
        let operate = '';
        for (let i = operationLength - 1; i >= 0; i--) {

            length = operation.slice(i, operationLength);
            operate = length.slice(0, 1);
            console.log(operate);

            if (operate == '/' || operate == '*' || operate == '-' || operate == '+') {
                break;
            }
        }


        if (lastChar == ')' || lastChar == '.') {
            // nothing
        } else {
            operation += '.';
        }
    }


    resultDiv.textContent = result;
    operationDiv.textContent = operation;
});