const panel = document.getElementById("elements");
const ope = document.getElementById("operator");
let draft = "";
let result = 0;
let oneTerm = "";
let secondTerm = "";
let operator;

const selectOperator = (select) => {
    if(oneTerm === ""){
        oneTerm = draft
    }
    if(select === 1){
        ope.innerHTML = ("+");
    }
    if(select === 2){
        ope.innerHTML = ("-");
    }
    if(select === 3){
        ope.innerHTML = ("*");
    }
    if(select === 4){
        ope.innerHTML = ("/");
    }
    panel.innerHTML = ("")
    draft = "";
    operator = select;
    console.log(select)
}

const calc = (ok) => {
    //console.log(ok);
    if(ok === 1){
        result = Number(oneTerm) + Number(secondTerm);
    }else if(ok === 2){
        result = Number(oneTerm) - Number(secondTerm); 
    }else if(ok === 3){
        result = Number(oneTerm) * Number(secondTerm);
    }else if(ok === 4){
        result = Number(oneTerm) / Number(secondTerm);
    }
    panel.innerHTML = (result);
    oneTerm = result;
    operator = 0;
    ope.innerHTML = ("");
}

const writer = (num) => {
    draft += num;
    //console.log(borrador);
    panel.innerText = (`${draft}`)
    ope.innerHTML = ("");
}

const operatorResult = () => {
    secondTerm = draft;
    draft = "";
    calc(operator);
}

const reset = () => {
    oneTerm = "";
    secondTerm = "";
    result = 0;
    draft = "";
    operator = 0;
    ope.innerHTML = ("");
    panel.innerHTML = ("");
}