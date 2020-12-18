var inputText = document.querySelector("#txt-input");
var translateButton = document.querySelector("#btn-translate");
var outputText = document.querySelector("#txt-output");

translateButton.addEventListener("click", clickEventListener)

function clickEventListener() {
    outputText.innerText = inputText.value;
}