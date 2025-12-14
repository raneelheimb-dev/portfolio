// A. Dark Mode Toggle
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// B. Edit Job Title
const editJobBtn = document.getElementById("editJobBtn");
const jobTitle = document.querySelector(".job-title");
editJobBtn.addEventListener("click", () => {
  const newTitle = prompt("Enter new job title:");
  if (newTitle) {
    jobTitle.textContent = newTitle;
  }
});

// C. Show/Hide Skills
const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.querySelector(".skills-section");
toggleSkillsBtn.addEventListener("click", () => {
  if (skillsSection.style.display === "none") {
    skillsSection.style.display = "block";
    toggleSkillsBtn.textContent = "Hide Skills";
  } else {
    skillsSection.style.display = "none";
    toggleSkillsBtn.textContent = "Show Skills";
  }
});

// D. Live Character Counter
const msgBox = document.getElementById("message");
const counter = document.getElementById("counter");
msgBox.addEventListener("keyup", () => {
  const remaining = 200 - msgBox.value.length;
  counter.textContent = remaining;
});

// E. Form Validation
function validateForm() {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  if (nameField.value.trim() === "" || emailField.value.trim() === "") {
    alert("Name and Email cannot be empty!");
    return false;
  }
  return true;
}
document.querySelector(".message-form").onsubmit = validateForm;

// F. Display Today's Date and Greeting
const dateDisplay = document.getElementById("dateDisplay");
const greeting = document.getElementById("greeting");

const now = new Date();

// Format of date
const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
const formatted = now.toLocaleDateString('en-US', options);
const finalDate = formatted.replace(',', ' |');

dateDisplay.textContent = finalDate;

// Greeting based on time
const hour = now.getHours();
let message = "";

if (hour < 12) {
  message = "Good Morning!";
} else if (hour < 18) {
  message = "Good Afternoon!";
} else {
  message = "Good Evening!";
}

greeting.textContent = message;