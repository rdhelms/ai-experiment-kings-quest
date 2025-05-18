<template>
  <div style="display: none;">
    <!-- This is an invisible component just to trigger asset generation -->
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { generateSceneBackground, generateCharacterSprite, generateItemSprite } from '../utils/createGameAssets';

export default {
  name: 'GameAssetGenerator',
  setup() {
    onMounted(() => {
      console.log('Generating game assets...');
      
      // Generate scene backgrounds
      const scenes = [
        'castle', 'castle_entrance', 'throne_room', 'royal_kitchen', 'royal_bedroom',
        'forest_path', 'forest_clearing', 'old_well', 
        'river', 'bridge', 'mountain_path', 'mountain_cave', 'dragon_lair'
      ];
      
      scenes.forEach(scene => {
        const dataUrl = generateSceneBackground(scene);
        // Store the data URLs in global window object for easy access
        window[`scene_${scene}`] = dataUrl;
      });
      
      // Generate character sprite
      const characterDataUrl = generateCharacterSprite();
      window.characterSprite = characterDataUrl;
      
      // Apply the character sprite to CSS
      const style = document.createElement('style');
      style.textContent = `
        .sprite {
          background-image: url("${characterDataUrl}") !important;
        }
      `;
      document.head.appendChild(style);
      
      // Generate item sprites
      const items = [
        'bucket', 'crown', 'bread', 'key', 'mushroom', 'fishing_rod', 'lantern', 'treasure'
      ];
      
      items.forEach(item => {
        const dataUrl = generateItemSprite(item);
        window[`item_${item}`] = dataUrl;
      });
      
      console.log('Game assets generated successfully!');
    });
    
    return {};
  }
}
</script>
