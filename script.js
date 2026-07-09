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

let a="";
let b="";
let operator="";
let isFinished = false;

const digitsdiv=document.querySelector('.digits');
const operatordiv=document.querySelector('.operator');
const displaydiv=document.querySelector('.display');
const calculatediv=document.querySelector('.calculate');
const cleardiv=document.querySelector('.clear');
const deletediv=document.querySelector('.delete');
const dotdiv=document.querySelector('.dot');

digitsdiv.addEventListener('click', (e) => {
    if (e.target.tagName!=="BUTTON") return;
    const digit=e.target.textContent;
    if (isFinished) {
        a = "";
        b = "";
        operator = "";
        isFinished = false; 
    }
    if (operator===""){
        a+=digit;
        displaydiv.textContent=a;
    } else {
        b+=digit;
        displaydiv.textContent=b;
    }
});

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

operatordiv.addEventListener('click', (e) => {
    if (e.target.tagName!=="BUTTON") return;
    isFinished = false;
    if (a!=="" && b!=="" && operator!==""){
        displaydiv.textContent=`${calculate(Number(a), Number(b), operator)}`;
        a=displaydiv.textContent;
        b="";
    } else {
        displaydiv.textContent=e.target.textContent;
    }
    operator=e.target.textContent;       
});

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

cleardiv.addEventListener('click', () => {
    a="";
    b="";
    operator="";
    displaydiv.textContent="";
})

