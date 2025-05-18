const gameData = {
  scenes: {
    'castle': {
      name: 'Castle Courtyard',
      description: 'You are in the castle courtyard. Stone walls surround you and a gate lies to the south. The castle entrance is to the north.',
      background: '/scenes/castle.png',
      items: ['bucket'],
      exits: {
        north: 'castle_entrance',
        south: 'forest_path'
      }
    },
    'castle_entrance': {
      name: 'Castle Entrance',
      description: 'You stand at the grand entrance to the castle. The large wooden doors are ornately carved.',
      background: '/scenes/castle_entrance.png',
      items: [],
      exits: {
        south: 'castle',
        north: 'throne_room'
      }
    },
    'throne_room': {
      name: 'Throne Room',
      description: 'The majestic throne room of the castle. A golden throne sits on a raised platform.',
      background: '/scenes/throne_room.png',
      items: ['crown'],
      exits: {
        south: 'castle_entrance',
        west: 'royal_kitchen',
        east: 'royal_bedroom'
      }
    },
    'royal_kitchen': {
      name: 'Royal Kitchen',
      description: 'The kitchen is full of cooking utensils and the smell of freshly baked bread.',
      background: '/scenes/royal_kitchen.png',
      items: ['bread'],
      exits: {
        east: 'throne_room'
      }
    },
    'royal_bedroom': {
      name: 'Royal Bedroom',
      description: 'The royal bedroom has a large four-poster bed with silken sheets.',
      background: '/scenes/royal_bedroom.png',
      items: ['key'],
      exits: {
        west: 'throne_room'
      }
    },
    'forest_path': {
      name: 'Forest Path',
      description: 'A winding path through the dense forest. The trees tower above you.',
      background: '/scenes/forest_path.png',
      items: [],
      exits: {
        north: 'castle',
        south: 'forest_clearing',
        east: 'river'
      }
    },
    'forest_clearing': {
      name: 'Forest Clearing',
      description: 'A small clearing in the forest. Sunlight streams down through the canopy.',
      background: '/scenes/forest_clearing.png',
      items: ['mushroom'],
      exits: {
        north: 'forest_path',
        west: 'old_well'
      }
    },
    'old_well': {
      name: 'Old Well',
      description: 'An ancient stone well. It looks like it might still have water in it.',
      background: '/scenes/old_well.png',
      items: [],
      exits: {
        east: 'forest_clearing'
      }
    },
    'river': {
      name: 'Riverbank',
      description: 'A wide river flows swiftly past. The water looks deep and cold.',
      background: '/scenes/river.png',
      items: ['fishing_rod'],
      exits: {
        west: 'forest_path',
        east: 'bridge'
      }
    },
    'bridge': {
      name: 'Stone Bridge',
      description: 'A sturdy stone bridge spans the river. It leads to the mountains in the east.',
      background: '/scenes/bridge.png',
      items: [],
      exits: {
        west: 'river',
        east: 'mountain_path'
      }
    },
    'mountain_path': {
      name: 'Mountain Path',
      description: 'A steep path winds up into the mountains. The air is thin and cold here.',
      background: '/scenes/mountain_path.png',
      items: [],
      exits: {
        west: 'bridge',
        north: 'mountain_cave'
      }
    },
    'mountain_cave': {
      name: 'Mountain Cave',
      description: 'A dark cave in the mountainside. Strange echoes reverberate from within.',
      background: '/scenes/mountain_cave.png',
      items: ['lantern'],
      exits: {
        south: 'mountain_path',
        north: 'dragon_lair'
      }
    },
    'dragon_lair': {
      name: 'Dragon\'s Lair',
      description: 'A vast cavern with glittering treasures scattered about. A fearsome dragon guards its hoard.',
      background: '/scenes/dragon_lair.png',
      items: ['treasure'],
      exits: {
        south: 'mountain_cave'
      }
    }
  },
  items: {
    'bucket': {
      name: 'Bucket',
      description: 'A simple wooden bucket with a rope handle.',
      image: '/items/bucket.png',
      x: 50,
      y: 150
    },
    'crown': {
      name: 'Crown',
      description: 'A golden crown adorned with jewels.',
      image: '/items/crown.png',
      x: 200,
      y: 100
    },
    'bread': {
      name: 'Bread',
      description: 'A fresh loaf of bread, still warm from the oven.',
      image: '/items/bread.png',
      x: 150,
      y: 130
    },
    'key': {
      name: 'Key',
      description: 'A small golden key. It might open something important.',
      image: '/items/key.png',
      x: 240,
      y: 160
    },
    'mushroom': {
      name: 'Mushroom',
      description: 'A strange glowing mushroom. It might have magical properties.',
      image: '/items/mushroom.png',
      x: 100,
      y: 180
    },
    'fishing_rod': {
      name: 'Fishing Rod',
      description: 'A fishing rod with line and hook. Good for catching fish.',
      image: '/items/fishing_rod.png',
      x: 280,
      y: 140
    },
    'lantern': {
      name: 'Lantern',
      description: 'An oil lantern that gives off a warm glow.',
      image: '/items/lantern.png',
      x: 180,
      y: 110
    },
    'treasure': {
      name: 'Treasure',
      description: 'A chest filled with gold and jewels.',
      image: '/items/treasure.png',
      x: 220,
      y: 120
    }
  }
}

export default gameData;
