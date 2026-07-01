// Feature 1: Loop-rendered dynamic content
const activities = [
    { name: "Volunteering", description: "Supporting local projects and helping families in need." },
    { name: "Youth Mentorship", description: "Guiding young people and encouraging leadership skills." },
    { name: "Community Events", description: "Organizing events that bring people together." }
];

const activityGrid = document.getElementById("activity-grid");

activities.forEach(activity => {
    const card = document.createElement("article");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = activity.name;

    const desc = document.createElement("p");
    desc.textContent = activity.description;

    card.appendChild(title);
    card.appendChild(desc);
    activityGrid.appendChild(card);
});

// Feature 2: Dynamically add & remove elements
const addActivityBtn = document.getElementById("add-activity-btn");
const newActivityInput = document.getElementById("new-activity-input");

addActivityBtn.addEventListener("click", () => {
    const value = newActivityInput.value.trim();
    if (value === "") return;

    const card = document.createElement("article");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = value;

    const desc = document.createElement("p");
    desc.textContent = "Suggested by a community member.";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () => {
        card.remove();
    });

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(removeBtn);
    activityGrid.appendChild(card);

    newActivityInput.value = "";
});

// Feature 3: Form handling with validation feedback
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (name === "" || !email.includes("@") || message === "") {
        formFeedback.textContent = "Please fill in your name, a valid email, and a message.";
        formFeedback.style.color = "red";
        return;
    }

    formFeedback.textContent = `Thanks, ${name}! Your message has been received. Brian will get back to you at ${email}.`;
    formFeedback.style.color = "green";
    contactForm.reset();
});

// Feature 4: Persistent state with localStorage
const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});
