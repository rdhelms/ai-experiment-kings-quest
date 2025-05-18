<template>
  <div v-if="showHelp" class="help-screen">
    <div class="help-content">
      <h2>King's Quest I - Help</h2>
      
      <div class="help-section">
        <h3>Game Controls</h3>
        <ul>
          <li><strong>Arrow Keys:</strong> Move the character</li>
          <li><strong>Text Parser:</strong> Enter commands to interact with the game world</li>
        </ul>
      </div>
      
      <div class="help-section">
        <h3>Basic Commands</h3>
        <ul>
          <li><strong>look</strong> - Examine your surroundings</li>
          <li><strong>inventory</strong> - Check what items you're carrying</li>
          <li><strong>take [item]</strong> - Pick up an item (e.g., "take key")</li>
          <li><strong>use [item]</strong> - Use an item you're carrying (e.g., "use key")</li>
          <li><strong>go [direction]</strong> - Move in a direction (e.g., "go north")</li>
          <li><strong>help</strong> - Show this help screen</li>
        </ul>
      </div>
      
      <div class="help-section">
        <h3>Game Objective</h3>
        <p>You are a brave adventurer on a quest to recover the kingdom's treasures.
        Explore the world, solve puzzles, and collect important items to complete your quest.</p>
      </div>
      
      <button class="close-button" @click="closeHelp">Close Help</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelpScreen',
  props: {
    showHelp: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeHelp() {
      this.$emit('close-help');
    }
  }
}
</script>

<style>
.help-screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.help-content {
  width: 80%;
  max-width: 700px;
  background-color: #111;
  border: 4px solid #442200;
  color: #fff;
  padding: 20px;
  font-family: 'Press Start 2P', monospace;
}

.help-content h2 {
  color: #ffcc00;
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
}

.help-section {
  margin-bottom: 20px;
}

.help-section h3 {
  color: #ffcc00;
  margin-bottom: 10px;
  font-size: 16px;
}

.help-section ul {
  list-style-type: none;
  padding-left: 10px;
}

.help-section li {
  margin-bottom: 8px;
  font-size: 12px;
}

.help-section p {
  font-size: 12px;
  line-height: 1.6;
}

.close-button {
  display: block;
  margin: 20px auto 0;
  padding: 10px 20px;
  background-color: #442200;
  color: #fff;
  border: 2px solid #885500;
  font-family: 'Press Start 2P', monospace;
  font-size: 14px;
  cursor: pointer;
}

.close-button:hover {
  background-color: #885500;
}
</style>
