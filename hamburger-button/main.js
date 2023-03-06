const btnHamburger = document.getElementById("btnHamburger");

btnHamburger.addEventListener("click", () => {
	const ariaExpanded = btnHamburger.getAttribute("aria-expanded");
	const topBar = document.getElementById("topBar");
	const midBar = document.getElementById("midBar");
	const botBar = document.getElementById("botBar");
	if (ariaExpanded === "false") {
		btnHamburger.setAttribute("aria-expanded", "true");
	} else {
		btnHamburger.setAttribute("aria-expanded", "false");
	}
	topBar.classList.toggle("bar--top-animation");
	midBar.classList.toggle("bar--mid-animation");
	botBar.classList.toggle("bar--bot-animation");
});
