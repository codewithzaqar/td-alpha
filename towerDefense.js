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

    // Example addition: Spawn a new enemy every second
    if (Math.random() < 0.01) {
        const enemy = {
            x: 0, // Start at the left edge
            y: Math.random() * canvas.height, // Random vertcal position
            speed: 2 + Math.random() * 2, // Random speed
        }
        gameState.enemies.push(enemy)
    }

    // Move enemies across the screen
    gameState.enemies.forEach(enemy => {
        enemy.x += enemy.speed
    })

    // Remove enemies that move off-screen
    gameState.enemies = gameState.enemies.filter(enemy => enemy.x < canvas.width)
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

    // Draw enemies
    ctx.fillStyle = 'red'
    gameState.enemies.forEach(enemy => {
        ctx.beginPath()
        ctx.arc(enemy.x, enemy.y, 10, 0, Math.PI * 2)
        ctx.fill()
    })
}

// Start the Game Loop
gameLoop()
