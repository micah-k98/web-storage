"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const enterButton = document.getElementById("enterButton");
    enterButton.addEventListener("click", enterButtonClicked);
})

function enterButtonClicked() {
    const name = document.getElementById("nameInput").value;
    const radioButtons = document.getElementsByName("radioButtons");

    sessionStorage.name = name;

    radioButtons.forEach(radio => {
        if (radio.id == "studentRadio" && radio.checked == true) sessionStorage.isStudent = true;
        else if (radio.id == "instructorRadio" && radio.checked == true) sessionStorage.isInstructor = true;
    })

    location.href = "/information.html";
}