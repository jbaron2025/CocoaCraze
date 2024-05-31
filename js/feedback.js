document.getElementById('simpleForm').addEventListener('submit', function (event) {
    let isValid = true;

    // Clear previous error messages
    document.getElementById('firstnameError').textContent = '';
    document.getElementById('lastnameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';

    // Firstname validation
    const firstname = document.getElementById('firstname').value;
    if (firstname.length < 2 || firstname.length > 26) {
        document.getElementById('firstnameError').textContent = 'First name must be between 2 and 26 characters.';
        isValid = false;
    }

    // Lastname validation
    const lastname = document.getElementById('lastname').value;
    if (lastname.length < 2 || lastname.length > 26) {
        document.getElementById('lastnameError').textContent = 'Last name must be between 2 and 26 characters.';
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Phone number validation
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must be in the format XXX-XXX-XXXX.';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});