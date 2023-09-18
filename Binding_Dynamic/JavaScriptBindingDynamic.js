var ButtonCounter = 0;
var TextBoxElement;
var DocumentButton;

function SetupDOMElements() {
    TextBoxElement = document.getElementById("txtButtonContext");
}

function AddNewButton() {
    var buttonContainer = document.createElement("div");

    var button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('ID', "btn" + ButtonCounter.toString());
    button.setAttribute('value', "btnShow" + ButtonCounter.toString());
    button.setAttribute('onclick', "AddedButtonClicked(" + ButtonCounter + ")");
    button.style.backgroundColor = "Blue";
    button.style.color = "White";
    button.style.height = "40px";

    buttonContainer.appendChild(button);

    document.getElementsByClassName("ButtonsAdded")[0].appendChild(buttonContainer);

    SetupEditButton(buttonContainer, ButtonCounter);
    SetupDeleteButton(buttonContainer, ButtonCounter);
    console.log("Tilføjede kanp: " + ButtonCounter);
    ButtonCounter++;
}

// Function to set up an edit button
function SetupEditButton(container, ButtonCounter) {
    var editButton = document.createElement('button');
    editButton.innerHTML = "Rediger";
    editButton.addEventListener('click', function () {
        EditButtonClicked(ButtonCounter);
    });

    container.appendChild(editButton);
}

// Function to set up a delete button
function SetupDeleteButton(container, ButtonCounter) {
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Fjern";
    deleteButton.addEventListener('click', function () {
        DeleteButtonClicked(ButtonCounter);
    });

    container.appendChild(deleteButton);
}

function AddedButtonClicked(ButtonCounter) {
    DocumentButton = document.getElementById("btn" + ButtonCounter.toString());
    TextBoxElement.value = DocumentButton.value;
    TextBoxElement.style.width = CalculateWidthOnControl(TextBoxElement);
    console.log(TextBoxElement.style.width);
}

function EditButtonClicked(ButtonCounter) {
    DocumentButton = document.getElementById("btn" + ButtonCounter.toString());
    TextBoxElement.value = DocumentButton.value;
    TextBoxElement.style.width = CalculateWidthOnControl(TextBoxElement);
    console.log("Klikkede på redigere for knap: " + ButtonCounter);
}

function DeleteButtonClicked(ButtonCounter) {
    var buttonContainer = document.getElementById("btn" + ButtonCounter.toString()).parentNode;
    buttonContainer.remove();
    console.log("Fjernede knap: " + ButtonCounter);
}

function TextboxValueChanged() {
    if (DocumentButton) {
        DocumentButton.value = TextBoxElement.value;
        TextBoxElement.style.width = CalculateWidthOnControl(TextBoxElement);
        console.log(TextBoxElement.style.width);
    }
}

function CalculateWidthOnControl(Control_Object) {
    ControlWidth = Control_Object.value.length;
    console.log(ControlWidth);
    return (ControlWidth * 9 + 25 + 'px');
}