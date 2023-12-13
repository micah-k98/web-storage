"use strict"

document.addEventListener("DOMContentLoaded", () => {
    checkRole();
})

function checkRole() {
    const ifInstructor = document.getElementById("ifInstructor");
    const ifStudent = document.getElementById("ifStudent");

    if (sessionStorage.role == "Instructor") ifInstructor.hidden = false;
    else if (sessionStorage.role == "Student") ifStudent.hidden = false;

    indexButton();
}

function indexButton() {
    const mainContainer = document.querySelector(".container");
    const button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-dark");
    button.classList.add("m-5");
    button.innerText = "Go back to Home Page";
    mainContainer.appendChild(button);

    button.addEventListener("click", () => location.href = "/index.html");
}