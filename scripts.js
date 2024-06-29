const projectsButton = document.querySelector(".js-projects");
console.log(projectsButton)
projectsButton.addEventListener("click", hello)

function hello() {
    window.alert("hello world")
}

document.addEventListener("DOMContentLoaded", setupNav)

function setupNAV() {
    const navbarLinks = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll("anchor");
    window.addEventListener("scroll", setupScroll);
}

function setupScroll() {
    const currentPos = window.scrollY;

    sections.forEach();
}