function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    console.log("Entered username: " + username); // Debugging output
    console.log("Entered password: " + password); // Debugging output

    if (username === "harshu722" && password === "918911") {
        alert("Login successful!");
        return true;
    } else {
        alert("Invalid username or password try again by Saharsh");
        return false;
    }
}
