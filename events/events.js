const upcomingEvents = [
    {
        title: "Valorant Championship",
        date: "March 15, 2025",
        image: "../assets/images/valorant.jpg",
        game: "Valorant",
        prizePool: "$1000",
        slots: "16 Teams",
        registration: "Open"
    },
    {
        title: "CS2 Masters",
        date: "April 1, 2025",
        image: "../assets/images/cs2.jpg",
        game: "Counter-Strike 2",
        prizePool: "$1500",
        slots: "8 Teams",
        registration: "Open"
    }
];

function createEventCards() {
    const container = document.querySelector('.events-container');
    upcomingEvents.forEach(event => {
        container.innerHTML += `
            <div class="event-card">
                <div class="event-image">
                    <img src="${event.image}" alt="${event.title}">
                    <div class="event-overlay">
                        <span class="registration-status">${event.registration}</span>
                    </div>
                </div>
                <div class="event-details">
                    <h3>${event.title}</h3>
                    <div class="event-info">
                        <p><i class="fas fa-calendar"></i> ${event.date}</p>
                        <p><i class="fas fa-gamepad"></i> ${event.game}</p>
                        <p><i class="fas fa-trophy"></i> ${event.prizePool}</p>
                        <p><i class="fas fa-users"></i> ${event.slots}</p>
                    </div>
                    <button class="register-btn" onclick="openRegistration('${event.title}')">
                        Register Now
                    </button>
                </div>
            </div>
        `;
    });
}

document.addEventListener('DOMContentLoaded', createEventCards);