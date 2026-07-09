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

const digitsdiv=document.querySelector('.digits');
const operatordiv=document.querySelector('.operator');
const displaydiv=document.querySelector('.display');
const calculatediv=document.querySelector('.calculate');
const cleardiv=document.querySelector('.clear');
const deletediv=document.querySelector('.delete');

digitsdiv.addEventListener('click', (e) => {
    if (e.target.tagName!=="BUTTON") return;
    const digit=e.target.textContent;
    if (operator===""){
        a+=digit;
        displaydiv.textContent=a;
    } else {
        b+=digit;
        displaydiv.textContent=b;
    }
});

operatordiv.addEventListener('click', (e) => {
    if (e.target.tagName!=="BUTTON") return;
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
        displaydiv.textContent=`${calculate(Number(a), Number(b), operator)}`;
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

