// input elements
const nameInput = document.getElementById("name");
const rollInput = document.getElementById("rollno");
const emailInput = document.getElementById("email");
const courseInput = document.getElementById("course");
const message = document.getElementById("message");

// form (kyunki form ki id nahi hai)
const form = document.getElementById("form");

// submit event
form.addEventListener("submit", function (event) {
    event.preventDefault(); // page reload stop

    const name = nameInput.value.trim();
    const roll = rollInput.value.trim();
    const email = emailInput.value.trim();

    message.style.fontSize = "16px";

    if (name === "") {
        message.innerText = "Please enter student name";
        message.style.color = "red";
    }
    else if (roll === "") {
        message.innerText = "Please enter roll number";
        message.style.color = "red";
    }
    else if (email === "") {
        message.innerText = "Please enter email";
        message.style.color = "red";
    }
    else {
        message.innerText = "Student removed successfully";
        message.style.color = "green";
        form.reset();
    }
});
