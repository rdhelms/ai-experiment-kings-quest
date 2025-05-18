<template>
  <div class="game-status">
    <p>{{ status }}</p>
  </div>
</template>

<script>
export default {
  name: 'GameStatus',
  props: {
    status: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.game-status {
  width: 100%;
  height: 60px;
  background-color: #000;
  color: #fff;
  font-family: 'Press Start 2P', monospace;
  font-size: 14px;
  padding: 10px;
  overflow-y: auto;
  border: 1px solid #442200;
}
</style>
