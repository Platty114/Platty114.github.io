//poppers/popperImages refer elements that are animated using shadows.
const button = document.querySelector(".darkLight");
const wrapper = document.querySelector(".wrapper");
const menuItems = document.querySelectorAll(".menuItem");
let currentlyDark = false;

/*
	swaps all elements classes from their light version to their dark version, 
	depending on the state the elements were in before the button was pressed.
*/
function changeMode() {
	if(currentlyDark === false){
		document.getElementById("background").style.backgroundImage = 'url("./images/cool-background2.png")';
		document.getElementById("background").style.color = 'white';
		for(let i =0; i < menuItems.length; i++) {
			menuItems[i].style.color = 'white';
		}
		currentlyDark = true;
	}
	else{
		document.getElementById("background").style.backgroundImage = 'url("./images/cool-background.png")';
		document.getElementById("background").style.color = 'black';
		for(let i =0; i < menuItems.length; i++) {
			menuItems[i].style.color = 'black';
		}
		currentlyDark = false;
	}
}

//initialize all javascript/program start.

function init() {
	button.addEventListener("click", function() {
		changeMode();
	});
}

init();
