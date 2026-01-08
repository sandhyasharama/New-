// elements
const form = document.getElementById("form");
const rollInput = document.getElementById("rollno");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const roll = rollInput.value.trim();

    if (roll === "") {
        message.innerText = "Please enter roll number";
        message.style.color = "red";
        return;
    }

    // localStorage se data lena
    const students = JSON.parse(localStorage.getItem("students")) || [];

    // student find karna
    const student = students.find(s => s.roll === roll);

    if (student) {
        message.style.color = "green";
        message.innerHTML =
            "Student Found <br>" +
            "Name: " + student.name + "<br>" +
            "Email: " + student.email + "<br>" +
            "Course: " + student.course;
    } else {
        message.innerText = "Student not found";
        message.style.color = "red";
    }
});
