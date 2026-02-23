let resultInput = document.getElementById('result');
let justCalculated = false;
let lastCharIsOperator = false;

function number(num) {
    if (justCalculated) {
        resultInput.value = "";
        justCalculated = false;
    }
    resultInput.value += num;
    lastCharIsOperator = false;
}


function operator (ope) {
    if (resultInput.value === "") return;
    if (lastCharIsOperator) return;
    resultInput.value += ope;
    lastCharIsOperator = true;
    justCalculated = false;
}

const del = () => {
    resultInput.value = resultInput.value.slice(0, -1);
    lastCharIsOperator = /[\+\-\*\/]$/.test(resultInput.value);
}
const egal = () => {
    try {
        resultInput.value = eval(resultInput.value);
        justCalculated = true;
        lastCharIsOperator = false;
    } catch {
        resultInput.value = "error";
        justCalculated = false;
    }
}

const off = () => {
    document.querySelector('#result').style.display = 'none';
    document.querySelector('#disable').style.display = 'block';
}

const on = () => {
    document.querySelector('#result').style.display = 'block';
    document.querySelector('#disable').style.display = 'none';
}