const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')

// Game State
const gameState = {
    enemies: [],
    towers: [],
    projectiles: [],
    money: 100,
    lives: 10,
    wave: 1,
}

// Game Loop
function gameLoop() {
    update()
    draw()
    requestAnimationFrame(gameLoop)
}

// Update Game State
function update() {
    // Placeholder for update logic

    // Example addition: Reduce money over time
    if (gameState.money > 0) {
        gameState.money -= 0.1 // Slowly decrease money
    }
}

function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw placeholder text
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black'
    ctx.fillText('Tower Defense v0.1', 10, 30)

    // Display current money
    ctx.fillText(`Money: ${Math.floor(gameState.money)}`, 10, 60)
}

// Start the Game Loop
gameLoop()
