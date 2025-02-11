/* filepath: /c:/Users/ajiju/OneDrive/Documents/ScalerEsports/login/login.js */
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const switchBtns = document.querySelectorAll('.switch-btn');

    // Form switch handlers
    switchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            if (btn.dataset.form === 'login') {
                loginForm.classList.remove('hidden');
                registerForm.classList.add('hidden');
            } else {
                registerForm.classList.remove('hidden');
                loginForm.classList.add('hidden');
            }
        });
    });

    // Login form handler
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add login logic here
        window.location.href = '../profile/profile.html';
    });

    // Register form handler
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add registration logic here
        window.location.href = '../profile/profile.html';
    });
});