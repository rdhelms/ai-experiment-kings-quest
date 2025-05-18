<template>
  <div class="game-scene" :style="{ backgroundImage: `url(${sceneBackground})` }">
    <div v-for="(item, index) in sceneItems" :key="index" class="item" :style="{ left: `${item.x}px`, top: `${item.y}px` }">
      <img :src="item.image" :alt="item.name" />
    </div>
  </div>
</template>

<script>
import gameData from '../data/gameData.js'

export default {
  name: 'GameScene',
  props: {
    currentScene: {
      type: String,
      required: true
    },
    playerPosition: {
      type: Object,
      required: true
    }
  },
  computed: {
    sceneBackground() {
      return gameData.scenes[this.currentScene].background
    },
    sceneItems() {
      const scene = gameData.scenes[this.currentScene]
      if (!scene.items) return []
      
      return scene.items.map(itemName => {
        const item = gameData.items[itemName]
        return {
          name: itemName,
          image: item.image,
          x: item.x,
          y: item.y
        }
      })
    }
  }
}
</script>

<style>
.game-scene {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}

.item {
  position: absolute;
  z-index: 10;
}

.item img {
  width: 24px;
  height: 24px;
}
</style>
