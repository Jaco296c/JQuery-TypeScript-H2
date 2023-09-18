var firstNumber = document.getElementById("FirstNumber");
var secondNumber = document.getElementById("SecondNumber");
var calcResult = document.getElementById("CalcResult");

class ButtonFunction {
    text : string

    constructor(text : string){
        this.text = text
    }

    action(){
        return()=>{
            if(this.text == "+"){
                if (firstNumber == null || secondNumber == null) return;
                calcResult = eval(firstNumber.innerText + secondNumber.innerText)
                console.log(firstNumber.getAttribute('Value'));
            }
        }
    }
}

var nb1 = new ButtonFunction("+");
var nb2 = new ButtonFunction("-");
var nb3 = new ButtonFunction("*");
var nb4 = new ButtonFunction("/");



function creationOfButton(btn : ButtonFunction){
    var calcButton = document.createElement("input");

    calcButton.type='button';
    calcButton.value=btn.text;
    calcButton.onclick = btn.action();
    return calcButton;
}

document.getElementById("ButtonArea")?.append(creationOfButton(nb1));
document.getElementById("ButtonArea")?.append(creationOfButton(nb2));
document.getElementById("ButtonArea")?.append(creationOfButton(nb3));
document.getElementById("ButtonArea")?.append(creationOfButton(nb4));
