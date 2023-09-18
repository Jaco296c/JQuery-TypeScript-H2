var firstNumber = document.getElementById("FirstNumber") as HTMLInputElement;
var secondNumber = document.getElementById("SecondNumber") as HTMLInputElement;
var calcResult = document.getElementById("CalcResult");

class ButtonFunction {
    text : string

    constructor(text : string){
        this.text = text
    }

    action(){
        return()=>{
                if (firstNumber == null || secondNumber == null) return;
                let result = eval(firstNumber.value + this.text + secondNumber.value)
                if (calcResult == null ) return;
                calcResult.innerHTML = result;
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
