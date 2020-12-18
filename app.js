var inputText = document.querySelector("#txt-input");
var translateButton = document.querySelector("#btn-translate");
var outputText = document.querySelector("#txt-output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function clickEventListener() {
    var txtInput = inputText.value; // taking input

    // showing output
    function result(json) {
        outputText.innerText = json.contents.text;
    }
    // calling server for processing
    fetch(getTranslationURL(txtInput))
        .then(response => response.json())
        .then(json => result(json))

}

translateButton.addEventListener("click", clickEventListener);