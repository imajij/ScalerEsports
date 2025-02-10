const liveEvents = [
    {
        title: "Valorant Pro League",
        teams: "Team Liquid vs Sentinels",
        game: "Valorant",
        viewers: "125K",
        status: "LIVE",
        image: "../assets/images/valorant-live.jpg"
    },
    // Add more live events
];

const upcomingEvents = [
    {
        title: "CS2 Masters",
        date: "March 15, 2025",
        game: "Counter-Strike 2",
        prizePool: "$10,000",
        slots: "16 Teams",
        registration: "Open",
        image: "../assets/images/cs2.jpg"
    },
    // Add more upcoming events
];

function createLiveEventCard(event) {
    return `
        <div class="event-card">
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}">
                <div class="live-indicator">LIVE</div>
            </div>
            <div class="event-details">
                <h3>${event.title}</h3>
                <div class="event-info">
                    <p><i class="fas fa-gamepad"></i> ${event.game}</p>
                    <p><i class="fas fa-users"></i> ${event.teams}</p>
                    <p><i class="fas fa-eye"></i> ${event.viewers} watching</p>
                </div>
                <button class="glass-button">Watch Now</button>
            </div>
        </div>
    `;
}

function createUpcomingEventCard(event) {
    return `
        <div class="event-card">
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}">
                <div class="event-overlay">${event.registration}</div>
            </div>
            <div class="event-details">
                <h3>${event.title}</h3>
                <div class="event-info">
                    <p><i class="fas fa-calendar"></i> ${event.date}</p>
                    <p><i class="fas fa-gamepad"></i> ${event.game}</p>
                    <p><i class="fas fa-trophy"></i> ${event.prizePool}</p>
                    <p><i class="fas fa-users"></i> ${event.slots}</p>
                </div>
                <button class="glass-button">Register Now</button>
            </div>
        </div>
    `;
}

function initializeEvents() {
    const liveContainer = document.querySelector('.live-events-container');
    const upcomingContainer = document.querySelector('.upcoming-events-container');

    liveEvents.forEach(event => {
        liveContainer.innerHTML += createLiveEventCard(event);
    });

    upcomingEvents.forEach(event => {
        upcomingContainer.innerHTML += createUpcomingEventCard(event);
    });
}

document.addEventListener('DOMContentLoaded', initializeEvents);