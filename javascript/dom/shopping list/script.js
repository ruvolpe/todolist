var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var list = document.querySelector("ul");
var todo = document.querySelectorAll("li");
var closeButtons = document.getElementsByClassName("closeButton");
var i = 0;

console.log(todo[i]);

// checks if there's info in the input
function inputLength() {
	return input.value.length;
}

// adds the new item to the list & adds close button to each item
function createListElement() {
	var todo = document.createElement("li");
	todo.appendChild(document.createTextNode(input.value));
	list.appendChild(todo);
	input.value = "";
	var space = document.createElement("space");
	var closeButton = document.createTextNode("\u00D7");
	space.className = "closeButton"
	space.appendChild(closeButton);
	todo.appendChild(space);
	for (i = 0; i < closeButtons.length; i++){
		var closeButton = closeButtons[i];
		closeButton.addEventListener('click', function(ev) {
			if (ev.target.className === "closeButton") {
				var div = this.parentElement;
				div.className = "endTask";
			}
		  });
	}
}

// adds the new item to the list after checking if there's info in the input
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// adds the new item to the list after checking if theres info in the input
// and if the key pressed was "enter"
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//   adds close button to the existing each item
function addCloseButton() {
	for (i = 0; i < todo.length; i++){
		var space = document.createElement("space");
		var closeButton = document.createTextNode("\u00D7");
		space.className = "closeButton"
		space.appendChild(closeButton);
		todo[i].appendChild(space);
	}
}

addCloseButton();

// removes the task when the close button is clicked
for (i = 0; i < closeButtons.length; i++){
	var closeButton = closeButtons[i];
	closeButton.addEventListener('click', function(ev) {
		if (ev.target.className === "closeButton") {
			var div = this.parentElement;
			div.className = "endTask";
		}
	  });
}

// crosses out an item on the list
list.addEventListener('click', function(ev) {
	if (ev.target.tagName === 'LI') {
	  ev.target.classList.toggle('done');
	}
  });

// adds item on click
button.addEventListener("click", addListAfterClick);

//adds item on "enter"
input.addEventListener("keypress", addListAfterKeypress);
