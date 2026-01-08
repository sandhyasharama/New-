document.addEventListener("DOMContentLoaded", function () {

    const nameInput = document.querySelector('input[name="name"]');
    const rollInput = document.querySelector('input[name="rollno"]');
    const loginBtn = document.getElementById("login");
    const message = document.getElementById("message");

    loginBtn.addEventListener("click", function () {

        const nameValue = nameInput.value.trim();
        const rollValue = rollInput.value.trim();

        if (nameValue === "" || rollValue === "") {
            message.innerText = "Please enter both Name and Roll Number";
            message.style.color = "red";
        } else {
            message.innerText = "Login successful!";
            message.style.color = "green";

            // optional: data store karna
            localStorage.setItem("studentName", nameValue);
            localStorage.setItem("rollNo", rollValue);

            // dusre page par redirect
            window.location.href = "../html/studentsecondpage.html"; 
            // yaha apna next page ka naam likho
        }
    });

});
