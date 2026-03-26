const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Inputs
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirm = document.getElementById("confirm");
    const dob = document.getElementById("dob");
    const terms = document.getElementById("terms");

    // Error fields
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmError = document.getElementById("confirmError");
    const successMsg = document.getElementById("successMsg");

    // Reset
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    successMsg.textContent = "";

    [name, email, password, confirm].forEach(input => {
        input.classList.remove("error-border", "success-border");
    });

    let valid = true;

    // Patterns
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    // Name
    if (name.value.trim() === "") {
        nameError.textContent = "Full Name is required";
        name.classList.add("error-border");
        valid = false;
    } else {
        name.classList.add("success-border");
    }

    // Email
    if (!email.value.match(emailPattern)) {
        emailError.textContent = "Enter a valid email";
        email.classList.add("error-border");
        valid = false;
    } else {
        email.classList.add("success-border");
    }

    // Password
    if (!password.value.match(passwordPattern)) {
        passwordError.textContent =
            "Min 8 chars, 1 uppercase & 1 number required";
        password.classList.add("error-border");
        valid = false;
    } else {
        password.classList.add("success-border");
    }

    // Confirm Password
    if (password.value !== confirm.value) {
        confirmError.textContent = "Passwords do not match";
        confirm.classList.add("error-border");
        valid = false;
    } else if (confirm.value !== "") {
        confirm.classList.add("success-border");
    }

    // DOB
    if (dob.value === "") {
        alert("Select Date of Birth");
        valid = false;
    }

    // Terms
    if (!terms.checked) {
        alert("Accept Terms & Conditions");
        valid = false;
    }

    // Success
    if (valid) {
        successMsg.textContent = "Signup Successful!";
        form.reset();

        // remove green borders after reset
        document.querySelectorAll("input").forEach(input => {
            input.classList.remove("success-border");
        });
    }
});