<template>
  <div class="app">
    <GameView />
  </div>
</template>

<script>
import GameView from './components/GameView.vue'

export default {
  name: 'App',
  components: {
    GameView
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
}
</style>
