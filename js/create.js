function validateSignup() {
const fname = document.getElementById("fname").value.trim();
const lname = document.getElementById("lname").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();
const createBtn = document.getElementById("createbtn");
const day = document.getElementById("day").value;
const month = document.getElementById("month").value;
const year = document.getElementById("year").value;
const gender = document.querySelector('input[name="gender"]:checked');
const signupbtn = document.getElementById("signupbtn");
const message = document.getElementById("message");
 signupbtn.addEventListener("click", function(event) {

    message.style.color = "red";
    if(fname===""){
        message.innerText = "What's your name?";
        return;
    }
    if(lname===""){
        message.innerText = "What's your last name?";
        return;
    }

    if(email===""){
        message.innerText = "Enter your email address or mobile number";
        return;
    }
    else if(!email.includes("sandhya@gmail.com") && (isNaN(email) || email.value ==123456)){
        message.innerText = "Please enter a valid email address or mobile number";
        return;
    }
    if(password.length < 6){
        message.innerText = "Your password must be at least 6 characters long.";
        return;
    }
    if(day=== "0" || month === "0" || year=== "0"){
        message.innerText = "Please select your date of birth.";
        return;
    }

    if(!gender){
        message.innerText = "Please select your gender.";
        return;
    }  
    message.style.color = "green";
    message.innerText = "Your account has been created successfully!";
    alert("Account Created Successfully!"); 
});}