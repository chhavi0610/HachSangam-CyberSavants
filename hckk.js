function openLoginDialog() {
    document.getElementById("loginModal").style.display = "block";
}

function closeLoginDialog() {
    document.getElementById("loginModal").style.display = "none";
}

function openSignupDialog() {
    document.getElementById("signupModal").style.display = "block";
}

function closeSignupDialog() {
    document.getElementById("signupModal").style.display = "none";
}

function login() {
    // Implement login functionality
}

function forgotPassword() {
    // Implement forgot password functionality
}

function signup() {
    // Implement signup functionality
}

function openLearnMore() {
    // Implement Learn More functionality
}

function scrollToHome() {
    document.querySelector(".content").scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
    document.querySelector("footer").scrollIntoView({ behavior: 'smooth' });
}
// Login Form Submission
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    // Handle login response
  });
  
  // Sign Up Form Submission
  document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const response = await fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    // Handle signup response
  });
  const express = require('express');
const app = express();

// Handle Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Validate credentials and generate token
  // Send token in response
});

// Handle Sign Up
app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  // Create new user in database
  // Send success message
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
window.onscroll = function() {fixNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function fixNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
}
function openDialog(dialogId) {
  document.getElementById(dialogId).style.display = 'block';
}

function closeDialog(dialogId) {
  document.getElementById(dialogId).style.display = 'none';
}
