// function calculatrice
let value;
const additionneur = (additionneur) => {
    document.getElementById('result').value += additionneur;
}
const operateur = (operateur) => {
    document.getElementById('result').value += operateur;
}

const del = () => {
    const resultInput = document.getElementById('result');
    // Supprime le dernier caractère de l'input
    resultInput.value = resultInput.value.slice(0, -1);
}


const egal = () => {
    try {
        let result = document.getElementById('result').value;
        let response = eval(result);
        document.getElementById('result').value = response;
    } catch (error) {
        document.getElementById('result').value = "error";
        value = "";
    }
}

const off = () => {
    document.querySelector('#result').style.display = 'none';
    document.querySelector('#disable').style.display = 'flex';
}

const on = () => {
    document.querySelector('#result').style.display = 'flex';
    document.querySelector('#disable').style.display = 'none';
}