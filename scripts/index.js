"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const enterButton = document.getElementById("enterButton");
    enterButton.addEventListener("click", enterButtonClicked);
})

function enterButtonClicked(event) {
    event.preventDefault();
    
    const name = document.getElementById("nameInput").value;
    const radioButtons = document.getElementsByName("radioButtons");

    sessionStorage.name = name;

    radioButtons.forEach(radio => {
        // if (radio.id == "studentRadio" && radio.checked == true) sessionStorage.isStudent = true;
        // else if (radio.id == "instructorRadio" && radio.checked == true) sessionStorage.isInstructor = true;
        if (radio.checked == true) sessionStorage.role = radio.labels[0].innerText;
    })

    location.href = "/information.html";
}