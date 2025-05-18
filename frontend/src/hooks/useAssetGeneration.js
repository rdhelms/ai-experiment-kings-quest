import { useEffect } from 'vue';
import { generateSceneBackground, generateCharacterSprite, generateItemSprite } from '../utils/createGameAssets';

// This hook will generate placeholder assets for our game in development
export default function useAssetGeneration() {
  useEffect(() => {
    // Generate and set scene backgrounds
    const scenes = [
      'castle', 'castle_entrance', 'throne_room', 'royal_kitchen', 'royal_bedroom',
      'forest_path', 'forest_clearing', 'old_well', 
      'river', 'bridge', 'mountain_path', 'mountain_cave', 'dragon_lair'
    ];
    
    scenes.forEach(scene => {
      const img = new Image();
      img.src = generateSceneBackground(scene);
      
      // Create a fake URL object to reference this image
      window[`${scene}_bg`] = img.src;
    });
    
    // Generate character sprite
    const characterSprite = new Image();
    characterSprite.src = generateCharacterSprite();
    window.characterSprite = characterSprite.src;
    
    // Set the character sprite as a CSS background image
    const style = document.createElement('style');
    style.innerHTML = `
      .sprite {
        background-image: url("${characterSprite.src}") !important;
      }
    `;
    document.head.appendChild(style);
    
    // Generate item sprites
    const items = [
      'bucket', 'crown', 'bread', 'key', 'mushroom', 'fishing_rod', 'lantern', 'treasure'
    ];
    
    items.forEach(item => {
      const img = new Image();
      img.src = generateItemSprite(item);
      window[`${item}_sprite`] = img.src;
    });
  }, []);
}
