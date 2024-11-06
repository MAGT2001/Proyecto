document.querySelector('.login-form').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!username || !email || !password || !confirmPassword) {
        event.preventDefault();
        alert('Por favor, completa todos los campos.');
    } else if (password !== confirmPassword) {
        event.preventDefault();
        alert('Las contraseñas no coinciden.');
    }
});