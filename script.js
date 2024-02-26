// Get the select element
const daySelect = document.getElementById("day");
const mouthSelect = document.getElementById("mouth");
const yearSelect = document.getElementById("year");

// Generate options for day from 1 to 31
for (let i = 1; i <= 31; i++) {
  let option = document.createElement("option");
  option.text = i;
  option.value = i;
  daySelect.appendChild(option);
}

// Generate options for mouth from 1 to 12
for (let i = 1; i <= 12; i++) {
  let option = document.createElement("option");
  option.text = i;
  option.value = i;
  mouthSelect.appendChild(option);
}

// Generate options for years from 1980 to 2024
for (let i = 1980; i <= 2005; i++) {
  let option = document.createElement("option");
  option.text = i;
  option.value = i;
  yearSelect.appendChild(option);
}

// validation password and email
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Perform validation checks
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirm_email").value;

    // Validate password
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Validate email
    if (email !== confirmEmail) {
      alert("Email do not match");
      return;
    }

    // If all validations pass, you can submit the form
    form.submit();
  });
});
