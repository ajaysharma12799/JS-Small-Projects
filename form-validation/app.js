const form = document.querySelector(".form");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // UserName
    if(usernameValue === "") {
        setErrorFor(username, "Username Can't be Blank");
    }
    else {
        setSuccessFor(username);
    }
    // Email
    if(emailValue === "") {
        setErrorFor(email, "Email Can't be Blank");
    }
    else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Not a Valid Email');
    }
    else {
        setSuccessFor(email);
    }
    // Password
    if(passwordValue === "") {
        setErrorFor(password, "Password Can't be Blank");
    }
    else if(passwordValue.length < 6) {
        setErrorFor(password, "Password Length Should be Above 6 Character");
    }
    else {
        setSuccessFor(password);
    }
}

function setErrorFor(inputField, message) {
    const formControl = inputField.parentElement;
    const small = formControl.querySelector("small");

    // Set Error Message In Small Tag
    small.innerText = message;
    // Set Error Class
    formControl.classList.add("error"); 
    
    setTimeout(() => { // Remove Error Message After 3s
        small.innerText = "";
    }, 3000);
}

function setSuccessFor(inputField) {
    const formControl = inputField.parentElement;
    // Set Success Class
    formControl.classList.add("success");
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}