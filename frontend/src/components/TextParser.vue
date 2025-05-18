<template>
  <div class="text-parser">
    <div class="prompt">></div>
    <input 
      type="text" 
      v-model="command" 
      @keyup.enter="submitCommand" 
      placeholder="Enter a command..."
      autofocus
    />
  </div>
</template>

<script>
export default {
  name: 'TextParser',
  data() {
    return {
      command: ''
    }
  },
  methods: {
    submitCommand() {
      this.$emit('command', this.command)
      this.command = ''
    }
  }
}
</script>

<style>
.text-parser {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.prompt {
  font-family: 'Press Start 2P', monospace;
  font-size: 16px;
  color: #fff;
  margin-right: 8px;
}

.text-parser input {
  flex: 1;
  height: 30px;
  background-color: #000;
  border: 1px solid #442200;
  color: #fff;
  font-family: 'Press Start 2P', monospace;
  font-size: 14px;
  padding: 0 10px;
}

.text-parser input:focus {
  outline: none;
  border-color: #885500;
}
</style>
