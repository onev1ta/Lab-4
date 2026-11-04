
// Lab 4: Fix the Form!

// Your job is to make the volunteer interest form work.

console.log("Volunteer form JavaScript loaded.");

const nameInput = document.querySelector("#name");
const result = document.querySelector("#result");


const volunteerForm = document.querySelector("#volunteerForm");
const emailInput = document.querySelector("#email");
const interestInput = document.querySelector("#interest");

volunteerForm.addEventListener("submit", function(event) {

    
    event.preventDefault();

    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const interest = interestInput.value;

    
    if (name === "") {
        result.textContent = "Please enter your name.";
    }
    else if (email === "") {
        result.textContent = "Please enter your email address.";
    }
    else if (!emailInput.checkValidity()) {
        result.textContent = "Please enter a valid email address.";
    }
    else if (interest === "") {
        result.textContent = "Please select an area of interest.";
    }

    else if (interest === "outreach") {
        result.textContent = "Thank you, " + name + "! We are excited about your interest in Community Outreach.";
    }
    else if (interest === "events") {
        result.textContent = "Thank you, " + name + "! We are excited about your interest in Event Support.";
    }
    else if (interest === "mentoring") {
        result.textContent = "Thank you, " + name + "! We are excited about your interest in Youth Mentoring.";
    }
else {
    result.textContent = "Please select a valid area of interest.";
}
});
