const button = document.querySelector(".darkLight");
const wrapper = document.querySelector(".wrapper");
const poppers = document.querySelectorAll(".popLight");
const popperImages = document.querySelectorAll(".popImageLight");
const menuItems = document.querySelectorAll(".menuStartPoint");
const html = document.querySelector("html");
console.log(html);

console.log(menuItems.length);


function changeMode() {
	if(wrapper.classList[1] === "light" || wrapper.classList[1] === "wrapperIntial"){
		wrapper.classList.remove("light");
		wrapper.classList.remove("wrapperIntial");
		html.classList.remove("backgroundStart");
		html.classList.remove("lightBackground");
		html.classList.add("darkBackground");
		wrapper.classList.add("dark");
		for(let i =0; i < poppers.length; i++) {
			//poppers[i].classList.remove("popTransitionToLight");
			poppers[i].classList.remove("popLight");
			poppers[i].classList.add("popDark");
			//poppers[i].classList.add("popTransitionToDark");
		}
		for(let i =0; i < popperImages.length; i++) {
			popperImages[i].classList.remove("popImageLight");
			popperImages[i].classList.add("popImageDark");
		}
		for(let i =0; i < menuItems.length; i++) {
			menuItems[i].classList.remove("menuStartPoint");
			menuItems[i].classList.remove("lightMenuItem");
			menuItems[i].classList.add("darkMenuItem");
		}
	}
	else{
		wrapper.classList.remove("dark");
		wrapper.classList.add("light");
		html.classList.add("lightBackground");
		html.classList.remove("darkBackground");
		for(let i =0; i < poppers.length; i++) {
			//poppers[i].classList.remove("popTransitionToDark");
			poppers[i].classList.remove("popDark");
			poppers[i].classList.add("popLight");
			//poppers[i].classList.add("popTransitionToLight");
		}
		for(let i =0; i < popperImages.length; i++) {
			popperImages[i].classList.remove("popImageDark");
			popperImages[i].classList.add("popImageLight");
		}
		for(let i =0; i < menuItems.length; i++) {
			menuItems[i].classList.add("lightMenuItem");
			menuItems[i].classList.remove("darkMenuItem");
		}
	}
}

function init() {
	button.addEventListener("click", function() {
		changeMode();
	});
}

init();
