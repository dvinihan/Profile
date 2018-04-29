let pageIntros = {
	home: "This is the Home Page. Welcome!",
	about: "My name is Daniel, I'm a guy.",
	portfolio: "I'm working on the following things.",
	contact: "Email or call me!"
};

function setIntroText(section) {
	document.getElementById("intro-text").innerHTML = pageIntros[section];
}

document.onload = setIntroText("home");

let tabs = document.getElementsByClassName("tab");

for(let i = 0; i < tabs.length; i++){
	tabs[i].onclick = function() {
		let tabName = tabs[i].innerHTML.toLowerCase();
		document.getElementById("intro-text").innerHTML = pageIntros[tabName];
	}
};