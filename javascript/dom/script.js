var input = document.getElementById("userInput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick (){
    if (inputLength() > 0){
        createListElement();
    }
}

function addListAfterEnter(event) {
    if (inputLength() > 0 && event.key === "Enter"){
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterEnter)