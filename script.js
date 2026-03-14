let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");
let strengthBar = document.querySelector(".strength-bar");
let strengthText = document.querySelector(".strength-text");
let charCounter = document.getElementById("char-counter");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.textContent = "🙈"; // Closed eye
    } else {
        password.type = "password";
        eyeicon.textContent = "👁️"; // Open eye
    }
};

password.addEventListener("input", function() {
    let strength = checkPasswordStrength(password.value);
    updateStrengthIndicator(strength);
    updateCharCounter();
});

function updateCharCounter() {
    let length = password.value.length;
    charCounter.textContent = length + " / 20";
    if (length > 15) {
        charCounter.style.color = "#ff4d4d";
    } else if (length > 12) {
        charCounter.style.color = "#ffa500";
    } else {
        charCounter.style.color = "#fff";
    }
}

function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
}

function updateStrengthIndicator(strength) {
    let width = (strength / 5) * 100;
    strengthBar.style.setProperty('--width', width + "%");
    strengthBar.style.setProperty('--background', getStrengthColor(strength));
    if (strength < 2) {
        strengthText.textContent = "Weak";
    } else if (strength < 4) {
        strengthText.textContent = "Medium";
    } else {
        strengthText.textContent = "Strong";
    }
}

function getStrengthColor(strength) {
    if (strength < 2) return "#ff4d4d";
    if (strength < 4) return "#ffa500";
    return "#4CAF50";
}