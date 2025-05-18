<template>
  <div class="app">
    <!-- Asset Generator Component -->
    <GameAssetGenerator />
    
    <!-- Game Title -->
    <div class="game-title">
      <h1>King's Quest I</h1>
      <p>Browser Edition</p>
    </div>
    
    <!-- Main Game Component -->
    <GameView />
  </div>
</template>

<script>
import GameView from './components/GameView.vue'
import GameAssetGenerator from './components/GameAssetGenerator.vue'

export default {
  name: 'App',
  components: {
    GameView,
    GameAssetGenerator
  }
}
</script>

<style>
.app {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
  position: relative;
  overflow: hidden;
  padding: 20px;
}

.game-title {
  margin-bottom: 20px;
  text-align: center;
  color: #ffcc00;
  text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000;
}

.game-title h1 {
  font-size: 36px;
  margin-bottom: 5px;
}

.game-title p {
  font-size: 18px;
  color: #fff;
}
</style>
