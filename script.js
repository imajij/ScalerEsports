// Sample data for scores
const scores = [
    {
        team1: "Team Alpha",
        team2: "Team Beta",
        score1: 13,
        score2: 7,
        game: "Valorant"
    },
    // Add more scores as needed
];

// Function to display scores
function displayScores() {
    const scoreContainer = document.querySelector('.score-container');
    scores.forEach(match => {
        const scoreCard = document.createElement('div');
        scoreCard.classList.add('score-card');
        scoreCard.innerHTML = `
            <div class="match-info">
                <span>${match.team1}</span>
                <span class="score">${match.score1} - ${match.score2}</span>
                <span>${match.team2}</span>
            </div>
            <div class="game-type">${match.game}</div>
        `;
        scoreContainer.appendChild(scoreCard);
    });
}

// Call function when page loads
document.addEventListener('DOMContentLoaded', () => {
    displayScores();
});

// Form handling for team registration
document.querySelector('.cta-button').addEventListener('click', () => {
    // Add your team registration logic here
    alert('Team registration coming soon!');
});