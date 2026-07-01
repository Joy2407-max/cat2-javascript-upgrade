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

