const Ac = document.getElementById("Ac");
const negation = document.getElementById("negation");
const percentage = document.getElementById("percentage");
const divide = document.getElementById("divide");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const multiply = document.getElementById("multiply");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const subtract = document.getElementById("subtract");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const add = document.getElementById("add");
const doublezeroes = document.getElementById("doublezeroes");
const zero = document.getElementById("zero");
const decimal = document.getElementById("decimal");
const eqto = document.getElementById("eqto");
const result = document.getElementById("result");


let displayValue = "";
function updateDisplay(){
if(displayValue == ""){
    result.innerHTML = '<span class="cursor"></span>'
}
else{
    result.textContent = displayValue;
}
}


Ac.addEventListener("click",()=>{
    displayValue = "";
    updateDisplay();
})



add.addEventListener("click",()=>{
displayValue += "+";
updateDisplay();
})

subtract.addEventListener("click",()=>{
displayValue += "-";
updateDisplay();
})

multiply.addEventListener("click",()=>{
displayValue += "*";
updateDisplay();
})


divide.addEventListener("click",()=>{
displayValue += "/";
updateDisplay();
})


one.addEventListener("click",()=>{
displayValue += "1";
updateDisplay();
})


two.addEventListener("click",()=>{
displayValue += "2";
updateDisplay();
})


three.addEventListener("click",()=>{
displayValue += "3";
updateDisplay();
})


four.addEventListener("click",()=>{
displayValue += "4";
updateDisplay();
})



five.addEventListener("click",()=>{
displayValue += "5";
updateDisplay();
})


six.addEventListener("click",()=>{
displayValue += "6";
updateDisplay();
})


seven.addEventListener("click",()=>{
displayValue += "7";
updateDisplay();
})



eight.addEventListener("click",()=>{
displayValue += "8";
updateDisplay();
})



nine.addEventListener("click",()=>{
displayValue += "9";
updateDisplay();
})

zero.addEventListener("click",()=>{
displayValue += "0";
updateDisplay();
})



doublezeroes.addEventListener("click",()=>{
displayValue += "00";
updateDisplay();
})


decimal.addEventListener("click",()=>{
displayValue += ".";
updateDisplay();
})


percentage.addEventListener("click",()=>{
displayValue = (eval(displayValue)/100).toString();
updateDisplay();
})


eqto.addEventListener("click",()=>{
let answer = eval(displayValue).toString();
result.textContent = answer;
displayValue = "";

})



negation.addEventListener("click",()=>{
if(displayValue.startsWith("-")){
    displayValue = displayValue.slice(1);
}
else{
    displayValue = "-" + displayValue;
}
updateDisplay();
})























