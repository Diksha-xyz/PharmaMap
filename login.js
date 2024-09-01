document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            // Validate login credentials here

            window.location.href = 'status.html';
        } else {
            alert('Both fields are required.');
        }
    });
});
