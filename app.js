var inputText = document.querySelector("#txt-input");
var translateButton = document.querySelector("#btn-translate");

console.log(inputText);
console.log(translateButton);

translateButton.addEventListener("click", clickEventListener)

function clickEventListener(){
    console.log("clicked");
}