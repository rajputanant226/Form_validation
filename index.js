function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmpassword").value;
  const errorMessage = document.getElementById("error-message");

  errorMessage.innerText = "";

  if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
    errorMessage.innerText = "All fields are mandatory";
    return false;
  }
  if (password !== confirmPassword) {
    errorMessage.innerText = "Passwords do not match";
    return false;
  }
  if (!isValidLength(password)) {
    errorMessage.innerText = "Password length must be 8 to 12 characters";
    return false;
  }
  if (!(containsAlpha(password) && containsDigit(password) && containsSpecial(password))) {
    errorMessage.innerText = "Password must contain at least one alphabet, one digit, and one special character";
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}

function isValidLength(pwd) {
  return pwd.length >= 8 && pwd.length <= 12;
}

function containsSpecial(pwd) {
  for (let i = 0; i < pwd.length; i++) {
    if (!(pwd[i] >= 'a' && pwd[i] <= 'z') &&
        !(pwd[i] >= 'A' && pwd[i] <= 'Z') &&
        !(pwd[i] >= '0' && pwd[i] <= '9')) {
      return true;
    }
  }
  return false;
}

function containsAlpha(pwd) {
  for (let i = 0; i < pwd.length; i++) {
    if ((pwd[i] >= 'a' && pwd[i] <= 'z') || (pwd[i] >= 'A' && pwd[i] <= 'Z')) {
      return true;
    }
  }
  return false;
}

function containsDigit(pwd) {
  for (let i = 0; i < pwd.length; i++) {
    if (pwd[i] >= '0' && pwd[i] <= '9') {
      return true;
    }
  }
  return false;
}
