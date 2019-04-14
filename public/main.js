// set all variables
var burger = document.getElementById('nav-icon');
var nav = document.getElementsByClassName('navbar-container');
var navContainer = document.getElementById("nav");
var item = navContainer.getElementsByClassName("menu-item");

// toggle class for burger menu
burger.onclick = function () {
    burger.classList.toggle('open');
    nav[0].classList.toggle('open');
};

// Loop through the buttons and add the active class to the current/clicked button add remove open classes
for (var i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        burger.classList.remove('open');
        nav[0].classList.remove('open');
    });
}