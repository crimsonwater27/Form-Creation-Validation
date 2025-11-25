document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();

        let isvalid = true;
        const messages = [];

        if (username.length < 3) {
            isvalid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        if (!email.includes('@') || !email.includes('.')) {
            isvalid = false;
            messages.push('Please enter a valid email address.');
        }

        if (password.length < 6) {
            isvalid = false;
            messages.push('Password must be at least 6 characters long.');
        }

        feedbackdiv.style.display = 'block';
        if (isvalid) {
            feedback.textContent = 'Form submitted successfully!';
            feedback.style.color = 'green';
            form.reset();
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedback.style.color = 'blue';
        }
    });
});
