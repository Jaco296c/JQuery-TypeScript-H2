var _a, _b, _c, _d;
var firstNumber = document.getElementById("FirstNumber");
var secondNumber = document.getElementById("SecondNumber");
var calcResult = document.getElementById("CalcResult");
var ButtonFunction = /** @class */ (function () {
    function ButtonFunction(text) {
        this.text = text;
    }
    ButtonFunction.prototype.action = function () {
        var _this = this;
        return function () {
            if (firstNumber == null || secondNumber == null)
                return;
            var result = eval(firstNumber.value + _this.text + secondNumber.value);
            if (calcResult == null)
                return;
            calcResult.innerHTML = result;
        };
    };
    return ButtonFunction;
}());
var nb1 = new ButtonFunction("+");
var nb2 = new ButtonFunction("-");
var nb3 = new ButtonFunction("*");
var nb4 = new ButtonFunction("/");
function creationOfButton(btn) {
    var calcButton = document.createElement("input");
    calcButton.type = 'button';
    calcButton.value = btn.text;
    calcButton.onclick = btn.action();
    return calcButton;
}
(_a = document.getElementById("ButtonArea")) === null || _a === void 0 ? void 0 : _a.append(creationOfButton(nb1));
(_b = document.getElementById("ButtonArea")) === null || _b === void 0 ? void 0 : _b.append(creationOfButton(nb2));
(_c = document.getElementById("ButtonArea")) === null || _c === void 0 ? void 0 : _c.append(creationOfButton(nb3));
(_d = document.getElementById("ButtonArea")) === null || _d === void 0 ? void 0 : _d.append(creationOfButton(nb4));
