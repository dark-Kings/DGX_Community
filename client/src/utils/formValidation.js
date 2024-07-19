export const validateRequired = (field) => {
    const inputField = document.getElementById(field);
    const errorElement = document.getElementById(`${field}Verify`);
    if (inputField.value === '') {
        inputField.classList.remove('is-valid');
        inputField.classList.add('is-invalid');
        errorElement.classList.remove('valid-feedback');
        errorElement.classList.add('invalid-feedback');
        errorElement.textContent = 'This field is required';
    } else {
        inputField.classList.remove('is-invalid');
        inputField.classList.add('is-valid');
        errorElement.classList.remove('invalid-feedback');
        errorElement.classList.add('valid-feedback');
        errorElement.textContent = 'Looks Great!';
    }
}

export const validatePhone = (phoneInput, phoneValue) => {
    const phoneVerify = document.getElementById('phoneNoVerify');
    if (!/^[6-9]\d{9}$/.test(phoneValue)) {
        phoneInput.classList.remove('is-valid');
        phoneInput.classList.add('is-invalid');
        phoneVerify.classList.remove('valid-feedback');
        phoneVerify.classList.add('invalid-feedback');
        phoneVerify.textContent = 'Phone Number Is Invalid';
    } else {
        phoneInput.classList.remove('is-invalid');
        phoneInput.classList.add('is-valid');
        phoneVerify.classList.remove('invalid-feedback');
        phoneVerify.classList.add('valid-feedback');
        phoneVerify.textContent = "That's Okay";
    }
}
export const validateEmail = (emailInput, emailValue) => {
    const emailVerify = document.getElementById('emailVerify');
    if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
        emailInput.classList.remove('is-valid');
        emailInput.classList.add('is-invalid');
        emailVerify.classList.remove('valid-feedback');
        emailVerify.classList.add('invalid-feedback');
        emailVerify.textContent = 'Enter a valid email address';
    } else {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
        emailVerify.classList.remove('invalid-feedback');
        emailVerify.classList.add('valid-feedback');
        emailVerify.textContent = "Good to Go!";
    }
}

export const validatePassword = (passwordInput, passwordValue) => {
    const passwordVerify = document.getElementById('passwordVerify');
    let errorMessage = '';
    if (passwordValue.length < 8) {
        errorMessage += 'Password must be at least 8 characters long';
    }
    if (!/\d/.test(passwordValue)) {
        errorMessage += ', must contain at least one digit';
    }
    // eslint-disable-next-line no-useless-escape
    if (!/[!@#$%^&*()_+={}\[\]:;<>,.?/~]/.test(passwordValue)) {
        errorMessage += ', one special character';
    }
    if (!/[a-z]/.test(passwordValue)) {
        errorMessage += ', one lowercase letter';
    }
    if (!/[A-Z]/.test(passwordValue)) {
        errorMessage += ', one uppercase letter';
    }
    if (errorMessage) {
        passwordInput.classList.remove('is-valid');
        passwordInput.classList.add('is-invalid');
        passwordVerify.classList.remove('valid-feedback');
        passwordVerify.classList.add('invalid-feedback');
        passwordVerify.textContent = errorMessage;
    } else {
        passwordInput.classList.remove('is-invalid');
        passwordInput.classList.add('is-valid');
        passwordVerify.classList.remove('invalid-feedback');
        passwordVerify.classList.add('valid-feedback');
        passwordVerify.textContent = 'That looks kind of strong password';
    }
}

export const validatePinCode = (pinCodeInput, pinCodeValue) => {
    const pinCodeVerify = document.getElementById('pinCodeVerify');
    if (!((pinCodeValue >= 110001) && (pinCodeValue <= 855117))) {
        pinCodeInput.classList.remove('is-valid');
        pinCodeInput.classList.add('is-invalid');
        pinCodeVerify.classList.remove('valid-feedback');
        pinCodeVerify.classList.add('invalid-feedback');
        pinCodeVerify.textContent = 'Please Enter a valid Pincode';
    } else {
        pinCodeInput.classList.remove('is-invalid');
        pinCodeInput.classList.add('is-valid');
        pinCodeVerify.classList.remove('invalid-feedback');
        pinCodeVerify.classList.add('valid-feedback');
        pinCodeVerify.textContent = 'Hope this finds well!';
    }
}
export const confirmPassword = (passwordValue, confirmPasswordValue, confirmPasswordInput) => {
    const conPasswordVerify = document.getElementById('conPasswordVerify');
    if (confirmPasswordValue !== '') {
        if (!(confirmPasswordValue === passwordValue)) {
            confirmPasswordInput.classList.remove('is-valid');
            confirmPasswordInput.classList.add('is-invalid');
            conPasswordVerify.classList.remove('valid-feedback');
            conPasswordVerify.classList.add('invalid-feedback');
            conPasswordVerify.textContent = 'Password and Confirm Passwords do not match';
        } else {
            confirmPasswordInput.classList.remove('is-invalid');
            confirmPasswordInput.classList.add('is-valid');
            conPasswordVerify.classList.remove('invalid-feedback');
            conPasswordVerify.classList.add('valid-feedback');
            conPasswordVerify.textContent = 'Very Good! Password Matched';
        }
    }
}