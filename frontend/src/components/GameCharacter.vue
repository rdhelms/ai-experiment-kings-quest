<template>
  <div class="character" :style="characterStyle" :class="{ moving: isMoving }">
    <div class="sprite" :class="[direction, isMoving ? 'moving' : '']"></div>
  </div>
</template>

<script>
export default {
  name: 'GameCharacter',
  props: {
    position: {
      type: Object,
      required: true
    },
    direction: {
      type: String,
      default: 'down'
    },
    isMoving: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    characterStyle() {
      return {
        left: `${this.position.x}px`,
        top: `${this.position.y}px`
      }
    }
  }
}
</script>

<style>
.character {
  position: absolute;
  width: 32px;
  height: 32px;
  z-index: 20;
  transform: translate(-50%, -50%);
}

.sprite {
  width: 100%;
  height: 100%;
  background-image: url('/sprites/character.png');
  background-size: 128px 128px; /* 4 frames x 4 directions */
}

.sprite.down {
  background-position: 0 0;
}

.sprite.left {
  background-position: 0 -32px;
}

.sprite.right {
  background-position: 0 -64px;
}

.sprite.up {
  background-position: 0 -96px;
}

.sprite.moving.down {
  animation: animate-down 0.5s steps(4) infinite;
}

.sprite.moving.left {
  animation: animate-left 0.5s steps(4) infinite;
}

.sprite.moving.right {
  animation: animate-right 0.5s steps(4) infinite;
}

.sprite.moving.up {
  animation: animate-up 0.5s steps(4) infinite;
}

@keyframes animate-down {
  from { background-position: 0 0; }
  to { background-position: -128px 0; }
}

@keyframes animate-left {
  from { background-position: 0 -32px; }
  to { background-position: -128px -32px; }
}

@keyframes animate-right {
  from { background-position: 0 -64px; }
  to { background-position: -128px -64px; }
}

@keyframes animate-up {
  from { background-position: 0 -96px; }
  to { background-position: -128px -96px; }
}
</style>
