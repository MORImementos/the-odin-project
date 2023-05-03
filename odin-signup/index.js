const form = document.querySelector('form');
const passwordInput = document.getElementById('pass');
const confirmPasswordInput = document.getElementById('conf-pass');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting by default

    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.setAttribute('isvalid', 'false');
        alert('Passwords do not match'); // Show an error message
        confirmPasswordInput.focus(); // Set focus to the confirmation field
        return false; // Return false to prevent the form from submitting
    }

    // If the passwords match, submit the form
    confirmPasswordInput.setAttribute('isvalid', 'true');
    form.submit();
});
