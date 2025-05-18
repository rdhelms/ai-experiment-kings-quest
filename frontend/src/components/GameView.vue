<template>
  <div class="game-container">
    <div class="game-screen">
      <GameScene :currentScene="currentScene" :playerPosition="playerPosition" />
      <GameCharacter :position="playerPosition" :direction="playerDirection" :isMoving="isMoving" />
    </div>
    <div class="game-interface">
      <GameStatus :status="gameStatus" />
      <TextParser @command="processCommand" />
      <Inventory :items="inventory" />
    </div>
  </div>
</template>

<script>
import GameScene from './GameScene.vue'
import GameCharacter from './GameCharacter.vue'
import GameStatus from './GameStatus.vue'
import TextParser from './TextParser.vue'
import Inventory from './Inventory.vue'
import gameData from '../data/gameData.js'

export default {
  name: 'GameView',
  components: {
    GameScene,
    GameCharacter,
    GameStatus,
    TextParser,
    Inventory
  },
  data() {
    return {
      currentScene: 'castle',
      playerPosition: { x: 160, y: 120 },
      playerDirection: 'down',
      isMoving: false,
      inventory: [],
      gameStatus: 'Welcome to King\'s Quest I. Type "help" for commands.',
      gameData: gameData,
      maxX: 320,
      maxY: 200
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeyPress)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress)
  },
  methods: {
    processCommand(command) {
      const lowerCommand = command.toLowerCase().trim()
      
      this.gameStatus = `> ${command}`
      
      // Basic command parsing
      if (lowerCommand === 'help') {
        this.gameStatus = 'Commands: look, take [item], use [item], go [direction], inventory'
      } else if (lowerCommand === 'look') {
        this.gameStatus = this.gameData.scenes[this.currentScene].description
      } else if (lowerCommand === 'inventory') {
        if (this.inventory.length === 0) {
          this.gameStatus = 'Your inventory is empty.'
        } else {
          this.gameStatus = `Inventory: ${this.inventory.join(', ')}`
        }
      } else if (lowerCommand.startsWith('take ')) {
        const itemName = lowerCommand.substring(5)
        this.takeItem(itemName)
      } else if (lowerCommand.startsWith('use ')) {
        const itemName = lowerCommand.substring(4)
        this.useItem(itemName)
      } else if (lowerCommand.startsWith('go ')) {
        const direction = lowerCommand.substring(3)
        this.moveDirection(direction)
      } else {
        this.gameStatus = "I don't understand that command."
      }
    },
    takeItem(item) {
      const scene = this.gameData.scenes[this.currentScene]
      if (scene.items && scene.items.includes(item)) {
        this.inventory.push(item)
        const index = scene.items.indexOf(item)
        scene.items.splice(index, 1)
        this.gameStatus = `You picked up the ${item}.`
      } else {
        this.gameStatus = `There is no ${item} here.`
      }
    },
    useItem(item) {
      if (!this.inventory.includes(item)) {
        this.gameStatus = `You don't have a ${item}.`
        return
      }
      
      // Item-specific logic
      // This would be expanded for actual game puzzles
      this.gameStatus = `You used the ${item}, but nothing happened.`
    },
    moveDirection(direction) {
      const scene = this.gameData.scenes[this.currentScene]
      if (scene.exits && scene.exits[direction]) {
        this.currentScene = scene.exits[direction]
        this.gameStatus = this.gameData.scenes[this.currentScene].description
      } else {
        this.gameStatus = `You can't go ${direction} from here.`
      }
    },
    handleKeyPress(event) {
      // Arrow key movement
      switch(event.key) {
        case 'ArrowUp':
          this.playerDirection = 'up'
          this.moveCharacter(0, -10)
          break
        case 'ArrowDown':
          this.playerDirection = 'down'
          this.moveCharacter(0, 10)
          break
        case 'ArrowLeft':
          this.playerDirection = 'left'
          this.moveCharacter(-10, 0)
          break
        case 'ArrowRight':
          this.playerDirection = 'right'
          this.moveCharacter(10, 0)
          break
      }
    },
    moveCharacter(deltaX, deltaY) {
      this.isMoving = true
      
      // Calculate new position
      let newX = this.playerPosition.x + deltaX
      let newY = this.playerPosition.y + deltaY
      
      // Boundary checking
      newX = Math.max(0, Math.min(this.maxX, newX))
      newY = Math.max(0, Math.min(this.maxY, newY))
      
      // Update position
      this.playerPosition = { x: newX, y: newY }
      
      // Check for scene transitions based on position
      this.checkSceneTransition()
      
      // Stop moving animation after a short delay
      setTimeout(() => {
        this.isMoving = false
      }, 200)
    },
    checkSceneTransition() {
      const scene = this.gameData.scenes[this.currentScene]
      
      // Check boundaries for scene transitions
      if (this.playerPosition.x <= 0 && scene.exits.west) {
        this.currentScene = scene.exits.west
        this.playerPosition.x = this.maxX - 10
      } else if (this.playerPosition.x >= this.maxX && scene.exits.east) {
        this.currentScene = scene.exits.east
        this.playerPosition.x = 10
      } else if (this.playerPosition.y <= 0 && scene.exits.north) {
        this.currentScene = scene.exits.north
        this.playerPosition.y = this.maxY - 10
      } else if (this.playerPosition.y >= this.maxY && scene.exits.south) {
        this.currentScene = scene.exits.south
        this.playerPosition.y = 10
      }
    }
  }
}
</script>

<style>
.game-container {
  width: 800px;
  height: 600px;
  background-color: #111;
  border: 4px solid #442200;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.game-screen {
  width: 100%;
  height: 400px;
  position: relative;
  background-color: #000;
  overflow: hidden;
}

.game-interface {
  width: 100%;
  height: 200px;
  background-color: #111;
  border-top: 4px solid #442200;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
</style>
