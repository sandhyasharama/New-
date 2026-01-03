// Elements ko ID ke zariye pakadna

const emailInput = document.getElementById('emailname').getElementsByTagName('input')[0];
const passwordInput = document.getElementById('passwordname').getElementsByTagName('input')[0];
const loginButton = document.getElementById('login').getElementsByTagName('button')[0];
const createAccountButton = document.getElementById('createaccount').getElementsByTagName('button')[0];
const messageDisplay = document.getElementById('message');
document.getElementById("createaccount").addEventListener("click", function () {
    window.location.href = "create.html";
});

// Login button click function
loginButton.addEventListener('click', function() {
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    if(emailValue===""){
        messageDisplay.textContent="please enter your email or phone number";
        messageDisplay.style.color="red";
    }
    else if(!emailValue.includes("sandhya@gmail.com") && (isNaN(emailValue))){
        message.innerText = "Please enter a valid email address ";
        return;
    }
    else if(passwordValue===""){
        messageDisplay.textContent="please enter your password";
        messageDisplay.style.color="red";
    }
    else if(!passwordValue.includes("123456") && (isNaN(passwordValue))){
        message.innerText = "Please enter a valid password ";
        return;
    }
    else{
        messageDisplay.textContent="logged in successfully";
        messageDisplay.style.color="green";
    }
});
