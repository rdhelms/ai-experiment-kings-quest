<template>
  <div class="game-scene" :style="{ backgroundImage: `url(${getSceneBackground()})` }">
    <div v-for="(item, index) in sceneItems" :key="index" class="item" :style="{ left: `${item.x}px`, top: `${item.y}px` }">
      <img :src="getItemImage(item.name)" :alt="item.name" />
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
    sceneItems() {
      const scene = gameData.scenes[this.currentScene];
      if (!scene.items) return [];
      
      return scene.items.map(itemName => {
        const item = gameData.items[itemName];
        return {
          name: itemName,
          x: item.x,
          y: item.y
        }
      });
    }
  },
  methods: {
    getSceneBackground() {
      // Use the generated scene background from the window object
      return window[`scene_${this.currentScene}`];
    },
    getItemImage(itemName) {
      // Use the generated item sprite from the window object
      return window[`item_${itemName}`];
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
