<template>
  <div class="inventory">
    <div class="inventory-title">Inventory</div>
    <div class="inventory-items">
      <div v-if="items.length === 0" class="empty-inventory">
        Your inventory is empty
      </div>
      <div v-else class="item-grid">
        <div v-for="(item, index) in items" :key="index" class="inventory-item">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inventory',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
.inventory {
  width: 100%;
  height: 70px;
  border: 1px solid #442200;
  background-color: #000;
}

.inventory-title {
  background-color: #442200;
  color: #fff;
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  padding: 4px 8px;
}

.inventory-items {
  padding: 8px;
  height: calc(100% - 24px);
  overflow-y: auto;
}

.empty-inventory {
  color: #aaa;
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  text-align: center;
  padding-top: 10px;
}

.item-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.inventory-item {
  background-color: #111;
  border: 1px solid #442200;
  color: #fff;
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 4px;
}
</style>
