let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function (){
	navbar.classList.toggle("active");
});

window.onscroll = () => {
	navbar.classList.remove("active");
};

window.addEventListener("load", () => {
	const loader = document.querySelector(".loader");

	loader.classList.add("loader--hidden");

	loader.addEventListener("transitionend", () => {
		document.body.removeChild(loader);
	});

});

