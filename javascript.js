const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
function openPreBookPage() {
    // Open a new window or tab with the desired content
    const preBookPageContent = "hello";
    const newWindow = window.open("", "_blank");
    newWindow.document.write(preBookPageContent);
}
function openPreBookPage() {
    // HTML content with inline styles
    const preBookPageContent = `
        <html>
        <head>
            <title>Pre Book Page</title>
            <style>
                input[type="text"], input[type="email"], input[type="password"], input[type="date"], input[type="time"], textarea {
                    width: 100%;
                    padding: 8px;
                    margin-bottom: 10px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    box-sizing: border-box;
                }
                input[type="submit"] {
                    background-color: #007bff;
                    color: #fff;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                input[type="submit"]:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
            <form>
                <input type="text" placeholder="Name"><br>
                <input type="email" placeholder="Email"><br>
                <input type="password" placeholder="Location"><br>
                <input type="date"><br>
                <input type="time"><br>
                <textarea placeholder="Message(optional)" rows="4" cols="50"></textarea><br>
                <input type="submit" value="Submit">
            </form>
        </body>
        </html>
    `;

    // Open a new window or tab with the desired content
    const newWindow = window.open("", "_blank");
    newWindow.document.write(preBookPageContent);
}
function openLoginDialog() {
    const dialogContent = `
        <div class="dialog-content">
            <h2>Login</h2>
            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username"><br>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password"><br>
            <button class="btn" onclick="login()">Login</button>
            <button class="btn" onclick="forgotPassword()">Forgot Password</button>
        </div>
    `;

    const userInput = prompt(dialogContent);
    // You can handle user input if needed
}

function openSignupDialog() {
    const dialogContent = `
        <div class="dialog-content">
            <h2>Sign Up</h2>
            <label for="emailOrPhone">Email or Phone:</label><br>
            <input type="text" id="emailOrPhone" name="emailOrPhone"><br>
            <label for="otp">OTP:</label><br>
            <input type="text" id="otp" name="otp"><br>
            <button class="btn" onclick="signup()">Sign Up</button>
        </div>
    `;

    const userInput = prompt(dialogContent);
    // You can handle user input if needed
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Example of handling login
    if (username === "example" && password === "password") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

function forgotPassword() {
    // Code for handling forgot password
}

function signup() {
    // Code for handling signup
    
}

