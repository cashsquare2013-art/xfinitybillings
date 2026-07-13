// Toggle password visibility
const showPasswordBtn = document.getElementById('showPasswordBtn');
const passwordInput = document.getElementById('password');

showPasswordBtn.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordBtn.textContent = 'HIDE';
    } else {
        passwordInput.type = 'password';
        showPasswordBtn.textContent = 'SHOW';
    }
});

// Handle form submission
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Simple validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Show success message (in production, this would send to a server)
    console.log('Login attempt:', {
        email: email,
        rememberMe: rememberMe
    });
    
    // Simulate loading state
    const loginBtn = document.querySelector('.login-btn');
    const originalText = loginBtn.textContent;
    loginBtn.textContent = 'LOGGING IN...';
    loginBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert('Login successful! (This is a demo)');
        loginBtn.textContent = originalText;
        loginBtn.disabled = false;
        loginForm.reset();
    }, 1500);
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Remember me functionality
window.addEventListener('DOMContentLoaded', function() {
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const emailInput = document.getElementById('email');
    
    // Check if email was previously saved
    const savedEmail = localStorage.getItem('kineticSavedEmail');
    if (savedEmail) {
        emailInput.value = savedEmail;
        rememberMeCheckbox.checked = true;
    }
    
    // Save email on form submission if remember me is checked
    loginForm.addEventListener('submit', function() {
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('kineticSavedEmail', emailInput.value);
        } else {
            localStorage.removeItem('kineticSavedEmail');
        }
    });
});