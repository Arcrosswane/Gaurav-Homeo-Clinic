document.getElementById('messageInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default form submission if any
        location.reload(); // Reload the webpage
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Perform form validation (if needed)
        if (validateForm()) {
            // Reload the webpage
            window.location.reload();
        } else {
            alert('Please fill out all required fields correctly.');
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        let isValid = true;

        // Check if name is provided
        if (name === '') {
            isValid = false;
            document.getElementById('name').style.borderColor = 'red';
        } else {
            document.getElementById('name').style.borderColor = '';
        }

        // Check if email is provided and valid
        if (email === '' || !validateEmail(email)) {
            isValid = false;
            document.getElementById('email').style.borderColor = 'red';
        } else {
            document.getElementById('email').style.borderColor = '';
        }

        // Check if message is provided
        if (message === '') {
            isValid = false;
            document.getElementById('message').style.borderColor = 'red';
        } else {
            document.getElementById('message').style.borderColor = '';
        }

        return isValid;
    }

    function validateEmail(email) {
        // Simple email validation pattern
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        hamburger.classList.toggle('active'); // Toggle active class for arrow rotation
    });
});
