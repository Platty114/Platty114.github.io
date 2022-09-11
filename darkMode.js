//poppers/popperImages refer elements that are animated using shadows.
const button = document.querySelector(".darkLight");
const wrapper = document.querySelector(".wrapper");
const poppers = document.querySelectorAll(".popLight");
const popperImages = document.querySelectorAll(".popImageLight");
const menuItems = document.querySelectorAll(".menuStartPoint");
const html = document.querySelector("html");

/*
	swaps all elements classes from their light version to their dark version, 
	depending on the state the elements were in before the button was pressed.
*/
function changeMode() {
	//previously light
	if(wrapper.classList[1] === "light" || wrapper.classList[1] === "wrapperIntial"){
		//remove all light classes/starting state classes.
		wrapper.classList.remove("light");
		wrapper.classList.remove("wrapperIntial");
		html.classList.remove("backgroundStart");
		html.classList.remove("lightBackground");
		html.classList.add("darkBackground");
		wrapper.classList.add("dark");
		//switch all poppers to dark mode.
		for(let i =0; i < poppers.length; i++) {
			poppers[i].classList.remove("popLight");
			poppers[i].classList.add("popDark");
		}
		//switch all popping images to dark.
		for(let i =0; i < popperImages.length; i++) {
			popperImages[i].classList.remove("popImageLight");
			popperImages[i].classList.add("popImageDark");
		}
		//switch all menu items to dark.
		for(let i =0; i < menuItems.length; i++) {
			menuItems[i].classList.remove("menuStartPoint");
			menuItems[i].classList.remove("lightMenuItem");
			menuItems[i].classList.add("darkMenuItem");
		}
	}
	//previously dark.
	else{
		//switch background/wrapper to light.
		wrapper.classList.remove("dark");
		wrapper.classList.add("light");
		html.classList.add("lightBackground");
		html.classList.remove("darkBackground");
		//make all popping elements light
		for(let i =0; i < poppers.length; i++) {
			poppers[i].classList.remove("popDark");
			poppers[i].classList.add("popLight");
		}
		//make all popping images light
		for(let i =0; i < popperImages.length; i++) {
			popperImages[i].classList.remove("popImageDark");
			popperImages[i].classList.add("popImageLight");
		}
		//make all menu items light.
		for(let i =0; i < menuItems.length; i++) {
			menuItems[i].classList.add("lightMenuItem");
			menuItems[i].classList.remove("darkMenuItem");
		}
	}
}

//initialize all javascript/program start.

function init() {
	button.addEventListener("click", function() {
		changeMode();
	});
}

init();
