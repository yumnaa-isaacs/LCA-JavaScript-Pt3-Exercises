// Simple Registration Form - DOM Validation Exercise

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    
    const form = document.getElementById("registrationForm");

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Clear previous errors
        usernameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";
        formMessage.textContent = "";

        username.style.border = "";
        email.style.border = "";
        password.style.border = "";
        confirmPassword.style.border = "";

        let isValid = true;

        // Username validation
        if (username.value.trim() === "") {
            usernameError.textContent = "Username cannot be empty";
            username.style.border = "2px solid red";
            isValid = false;
        }

        // Email validation (simple @ check)
        if (email.value.trim() === "") {
            emailError.textContent = "Email cannot be empty";
            email.style.border = "2px solid red";
            isValid = false;
        } else if (!email.value.includes("@")) {
            emailError.textContent = "Email must contain @";
            email.style.border = "2px solid red";
            isValid = false;
        }

        // Password validation
        if (password.value.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters";
            password.style.border = "2px solid red";
            isValid = false;
        }

        // Confirm password validation
        if (confirmPassword.value !== password.value) {
            confirmPasswordError.textContent = "Passwords do not match";
            confirmPassword.style.border = "2px solid red";
            isValid = false;
        }

        // Success case
        if (isValid) {
            formMessage.textContent = "Registration successful!";
            formMessage.style.color = "green";

            console.log("Username:", username.value);
            console.log("Email:", email.value);

            // Reset form
            form.reset();
        }
    });
});