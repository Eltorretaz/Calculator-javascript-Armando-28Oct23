const panel = document.getElementById("elements")
let operacion = "";
let resultado;

const selection = (num) => {
    if(num === 10){
        operacion += " + "
    }else if(num === 11){
        operacion += " - " 
    }else if(num === 12){
        operacion += " * "
    }else if(num === 13){
        operacion += " / "
    }else if(num < 10) {
        operacion += num;
    }
    panel.innerText = (`${operacion}`)
}

const result = () => {
    console.log(typeof(operacion))
}
