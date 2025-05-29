
// Function to toggle flag on right-click
function flagCell(event) {
    event.preventDefault(); // Prevent default right-click menu
    if (gameOver) return;
    const index = parseInt(event.target.dataset.index);
    
    if (!event.target.classList.contains("revealed")) {
        if (event.target.textContent === "🚩") {
            event.target.textContent = "";
        } else {
            event.target.textContent = "🚩";
        }
    }
}

// Attach right-click event to all cells
document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("contextmenu", flagCell);
});
document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("introScreen").style.display = "none"; // Hide title screen
    document.getElementById("game-container").style.display = "block"; // Show game
    createBoard(); // Start the game
});




