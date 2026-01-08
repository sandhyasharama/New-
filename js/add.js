// get elements
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const rollInput = document.getElementById("rollno");
const emailInput = document.getElementById("email");
const courseInput = document.getElementById("course");
const message = document.getElementById("message");

// submit event
form.addEventListener("submit", function (event) {
    event.preventDefault(); // page reload stop

    const name = nameInput.value.trim();
    const roll = rollInput.value.trim();
    const email = emailInput.value.trim();
    const course = courseInput.value;

    message.style.fontSize = "16px";

    if (name === "") {
        message.innerText = "Please enter student name";
        message.style.color = "red";
        nameInput.focus();
    }
    else if (roll === "") {
        message.innerText = "Please enter roll number";
        message.style.color = "red";
        rollInput.focus();
    }
    else if (email === "") {
        message.innerText = "Please enter email";
        message.style.color = "red";
        emailInput.focus();
    }
    else {
        message.innerText = "Student added successfully";
        message.style.color = "green";
        form.reset();
    }
});
