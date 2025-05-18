// This file contains functions that generate placeholder assets for the game
// In a real game, these would be replaced with actual pixel art assets

// Generate a simple colored rectangle image
function generateColoredImage(color, width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  // Draw background
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);
  
  // Add some visual interest with a border
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  ctx.strokeRect(2, 2, width - 4, height - 4);
  
  return canvas.toDataURL();
}

// Generate a scene background
function generateSceneBackground(name) {
  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 400;
  const ctx = canvas.getContext('2d');
  
  // Different scenes get different base colors
  let bgColor = '#005500'; // Default forest green
  
  if (name.includes('castle')) {
    bgColor = '#555555'; // Castle gray
  } else if (name.includes('throne')) {
    bgColor = '#880000'; // Royal red
  } else if (name.includes('kitchen')) {
    bgColor = '#885500'; // Kitchen brown
  } else if (name.includes('bedroom')) {
    bgColor = '#000088'; // Bedroom blue
  } else if (name.includes('river') || name.includes('bridge')) {
    bgColor = '#0055aa'; // Water blue
  } else if (name.includes('mountain')) {
    bgColor = '#555577'; // Mountain gray-blue
  } else if (name.includes('cave') || name.includes('lair')) {
    bgColor = '#333333'; // Cave dark gray
  }
  
  // Fill background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Add a simple pattern for texture
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 5 + 2;
    ctx.fillRect(x, y, size, size);
  }
  
  // Add scene name
  ctx.fillStyle = '#ffffff';
  ctx.font = '20px "Press Start 2P"';
  ctx.textAlign = 'center';
  ctx.fillText(name, canvas.width / 2, 30);
  
  return canvas.toDataURL();
}

// Generate a character sprite sheet
function generateCharacterSprite() {
  const canvas = document.createElement('canvas');
  const spriteSize = 32;
  const frameCount = 4;
  const directionCount = 4;
  canvas.width = spriteSize * frameCount;
  canvas.height = spriteSize * directionCount;
  const ctx = canvas.getContext('2d');
  
  // Base color for the character
  const characterColor = '#ff9900';
  
  // For each direction (down, left, right, up)
  for (let dir = 0; dir < directionCount; dir++) {
    // For each animation frame
    for (let frame = 0; frame < frameCount; frame++) {
      // Calculate position
      const x = frame * spriteSize;
      const y = dir * spriteSize;
      
      // Draw character base
      ctx.fillStyle = characterColor;
      ctx.fillRect(x + 8, y + 8, 16, 16);
      
      // Draw head
      ctx.fillRect(x + 10, y + 3, 12, 8);
      
      // Draw limbs - position varies by frame for animation
      const offset = frame % 2 === 0 ? 2 : -2;
      
      // Arms
      ctx.fillStyle = characterColor;
      
      // Different arm positions for different directions
      if (dir === 0) { // Down
        ctx.fillRect(x + 4, y + 10, 4, 8 + offset);
        ctx.fillRect(x + 24, y + 10, 4, 8 - offset);
      } else if (dir === 1) { // Left
        ctx.fillRect(x + 4, y + 10, 4, 8);
        ctx.fillRect(x + 6, y + 18, 4, 4);
      } else if (dir === 2) { // Right
        ctx.fillRect(x + 24, y + 10, 4, 8);
        ctx.fillRect(x + 22, y + 18, 4, 4);
      } else { // Up
        ctx.fillRect(x + 4, y + 10, 4, 8 - offset);
        ctx.fillRect(x + 24, y + 10, 4, 8 + offset);
      }
      
      // Legs
      if (dir === 1) { // Left
        ctx.fillRect(x + 10, y + 24, 6, 6 + offset);
        ctx.fillRect(x + 16, y + 24, 6, 6 - offset);
      } else if (dir === 2) { // Right
        ctx.fillRect(x + 10, y + 24, 6, 6 - offset);
        ctx.fillRect(x + 16, y + 24, 6, 6 + offset);
      } else { // Up or Down
        ctx.fillRect(x + 8, y + 24, 6, 6 + offset);
        ctx.fillRect(x + 18, y + 24, 6, 6 - offset);
      }
      
      // Eyes - direction dependent
      ctx.fillStyle = '#ffffff';
      if (dir === 0) { // Down
        ctx.fillRect(x + 12, y + 6, 2, 2);
        ctx.fillRect(x + 18, y + 6, 2, 2);
      } else if (dir === 1) { // Left
        ctx.fillRect(x + 10, y + 6, 2, 2);
      } else if (dir === 2) { // Right
        ctx.fillRect(x + 20, y + 6, 2, 2);
      } else { // Up
        // No visible eyes when looking up
      }
    }
  }
  
  return canvas.toDataURL();
}

// Generate an item sprite
function generateItemSprite(name) {
  const canvas = document.createElement('canvas');
  canvas.width = 24;
  canvas.height = 24;
  const ctx = canvas.getContext('2d');
  
  // Different items get different colors and shapes
  let color = '#ffff00'; // Default yellow
  
  if (name === 'bucket') {
    color = '#aa5500'; // Brown
    // Draw bucket shape
    ctx.fillStyle = color;
    ctx.fillRect(5, 6, 14, 12);
    ctx.fillStyle = '#886600';
    ctx.fillRect(6, 7, 12, 10);
    ctx.fillStyle = '#333333';
    ctx.fillRect(9, 3, 6, 3);
  } else if (name === 'crown') {
    color = '#ffcc00'; // Gold
    // Draw crown shape
    ctx.fillStyle = color;
    ctx.fillRect(2, 15, 20, 4);
    ctx.fillRect(4, 11, 2, 4);
    ctx.fillRect(9, 8, 6, 7);
    ctx.fillRect(18, 11, 2, 4);
    ctx.fillStyle = '#ff0000'; // Red jewel
    ctx.fillRect(11, 6, 2, 2);
  } else if (name === 'bread') {
    color = '#cc8800'; // Brown
    // Draw bread shape
    ctx.fillStyle = color;
    ctx.fillRect(4, 8, 16, 8);
    ctx.fillStyle = '#aa6600';
    ctx.fillRect(5, 9, 14, 6);
  } else if (name === 'key') {
    color = '#ffcc00'; // Gold
    // Draw key shape
    ctx.fillStyle = color;
    ctx.fillRect(5, 10, 14, 4);
    ctx.fillRect(15, 5, 4, 14);
    ctx.fillRect(16, 3, 2, 2);
  } else if (name === 'mushroom') {
    color = '#ff0000'; // Red
    // Draw mushroom shape
    ctx.fillStyle = color;
    ctx.fillRect(8, 4, 8, 2);
    ctx.fillRect(6, 6, 12, 2);
    ctx.fillRect(8, 8, 8, 8);
    ctx.fillStyle = '#ffffff'; // Spots
    ctx.fillRect(10, 6, 2, 2);
    ctx.fillRect(14, 7, 2, 2);
  } else if (name === 'fishing_rod') {
    color = '#884400'; // Brown
    // Draw fishing rod shape
    ctx.fillStyle = color;
    ctx.fillRect(4, 18, 16, 2);
    ctx.fillRect(4, 4, 2, 14);
    ctx.strokeStyle = '#cccccc';
    ctx.beginPath();
    ctx.moveTo(6, 4);
    ctx.lineTo(16, 12);
    ctx.stroke();
  } else if (name === 'lantern') {
    color = '#cccc00'; // Yellow
    // Draw lantern shape
    ctx.fillStyle = '#886600';
    ctx.fillRect(9, 4, 6, 2);
    ctx.fillRect(10, 6, 4, 2);
    ctx.fillStyle = color;
    ctx.fillRect(8, 8, 8, 10);
    ctx.fillStyle = '#ffff88';
    ctx.fillRect(10, 10, 4, 6);
  } else if (name === 'treasure') {
    color = '#aa5500'; // Brown
    // Draw treasure chest shape
    ctx.fillStyle = color;
    ctx.fillRect(4, 8, 16, 10);
    ctx.fillStyle = '#ffcc00'; // Gold
    ctx.fillRect(6, 10, 12, 6);
    ctx.fillStyle = '#333333'; // Lock
    ctx.fillRect(11, 6, 2, 4);
  }
  
  return canvas.toDataURL();
}

// Function to download all generated assets
function downloadGeneratedAssets() {
  // Generate and download scene backgrounds
  const scenes = [
    'castle', 'castle_entrance', 'throne_room', 'royal_kitchen', 'royal_bedroom',
    'forest_path', 'forest_clearing', 'old_well', 
    'river', 'bridge', 'mountain_path', 'mountain_cave', 'dragon_lair'
  ];
  
  scenes.forEach(scene => {
    const dataUrl = generateSceneBackground(scene);
    const link = document.createElement('a');
    link.download = `${scene}.png`;
    link.href = dataUrl;
    link.click();
  });
  
  // Generate and download character sprite
  const characterDataUrl = generateCharacterSprite();
  const characterLink = document.createElement('a');
  characterLink.download = 'character.png';
  characterLink.href = characterDataUrl;
  characterLink.click();
  
  // Generate and download item sprites
  const items = [
    'bucket', 'crown', 'bread', 'key', 'mushroom', 'fishing_rod', 'lantern', 'treasure'
  ];
  
  items.forEach(item => {
    const dataUrl = generateItemSprite(item);
    const link = document.createElement('a');
    link.download = `${item}.png`;
    link.href = dataUrl;
    link.click();
  });
}

export { generateSceneBackground, generateCharacterSprite, generateItemSprite, downloadGeneratedAssets };
