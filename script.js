const digitsdiv=document.querySelector('.digits');
const operatordiv=document.querySelector('.operator');
const displaydiv=document.querySelector('.display');
const calculatediv=document.querySelector('.calculate');
const cleardiv=document.querySelector('.clear');
const deletediv=document.querySelector('.delete');
const dotdiv=document.querySelector('.dot');

let a="";
let b="";
let operator="";
let isFinished = false;

function add(a, b){
    return a+b;
};
function subtract(a, b){
    return a-b;
};
function multiply(a, b){
    return a*b;
};
function divide(a, b){
    if (b===0){
        return "FAHHHH";
    }
    return Number((a/b).toFixed(2));
};

function calculate(a, b, operator){
    switch(operator){
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
        default:
            alert(`Enter a valid operator`);
    }
}

function handleDigit(digit) {
    if (isFinished) {
        a = "";
        b = "";
        operator = "";
        isFinished = false; 
    }

    if (operator === "") {
        if (a === "0" && digit === "0") return; 
        if (a === "0" && digit !== "0") a = ""; 
        a += digit;
        displaydiv.textContent = a;
    } else {
        if (b === "0" && digit === "0") return;
        if (b === "0" && digit !== "0") b = "";
        b += digit;
        displaydiv.textContent = b;
    }
}

digitsdiv.addEventListener('click', (e) => {
    if (e.target.tagName !== "BUTTON") return;
    handleDigit(e.target.textContent); // Pass the clicked number
});

// keyboard
document.addEventListener('keydown', (e) => {
    const key=e.key;
    console.log(key);
    if (key === '/' || key === 'Enter') {
        event.preventDefault(); 
    }
    if (key>="0" && key<="9"){
        handleDigit(key);
    } else if (["+", "-", "*", "/"].includes(key)){
        handleOperator(key);
    } else if (key==="=" || key==="Enter"){
        calculatediv.click();
    } else if (key==="Backspace"){
        deletediv.click();
    } else if (key==="."){
        dotdiv.click();
    }
});

// .
dotdiv.addEventListener('click', () => {
    if (operator === "") {
        if (a.includes(".")) return;
        if (a === "") a = "0";
        a += ".";
        displaydiv.textContent = a;
    }
    else {
        if (b.includes(".")) return;
        if (b === "") b = "0";
        b += ".";
        displaydiv.textContent = b;
    }
});

function handleOperator(selectedOperator) {
    if (a !== "" && b !== "" && operator !== "") {
        displaydiv.textContent = `${calculate(Number(a), Number(b), operator)}`;
        a = displaydiv.textContent;
        b = "";
    } else {
        displaydiv.textContent = selectedOperator; 
    }
    operator = selectedOperator;
    isFinished = false;
}
operatordiv.addEventListener('click', (e) => {
    if (e.target.tagName !== "BUTTON") return;
    handleOperator(e.target.textContent);
});

// calculation proccess
calculatediv.addEventListener('click', () => {
    if (a==="" || b==="" || operator===""){
        displaydiv.textContent="you think you slick, eh?";
    } else {
        const result = calculate(Number(a), Number(b), operator);
        displaydiv.textContent = result;
        a = result.toString(); 
        b = "";
        operator = "";
        isFinished = true; 
    } 
});

// delete last digit or go back
deletediv.addEventListener('click', () => {
    if (b !== "") {
        b = b.slice(0, -1);
        displaydiv.textContent = b || operator || a || "0"; 
    }
    else if (operator !== "") {
        operator = "";
        displaydiv.textContent = a || "0";
    }
    else if (a !== "") {
        a = a.slice(0, -1);
        displaydiv.textContent = a || "0";
    }
});

// reset button
cleardiv.addEventListener('click', () => {
    a="";
    b="";
    operator="";
    displaydiv.textContent="";
})

