class ExternalScene extends window.BaseScene {
  constructor() {
    super({
      player: {
        spawn: {
          x: 110,
          y: 180,
        },
      },
    });
  }

  create() {
    super.create();

    // Define projectile types
    const blueberryProjectile = {
      speed: 500,
      size: 10,
      damage: 0.25,
    };

    const orangeProjectile = {
      speed: 300,
      size: 20,
      damage: 0.3,
    };

    const appleProjectile = {
      speed: 100,
      size: 30,
      damage: 0.35,
    };

    const npcClothing = {
      body: "Goblin Potion",
      hat: "Warrior Helmet",
      hair: "Buzz Cut",
      shirt: "Warrior Shirt",
      pants: "Warrior Pants",
      tool: "Ancient Goblin Sword",
    };

    this.initialiseNPCs([
      {
        x: 380,
        y: 170,
        npc: "Test",
        clothing: npcClothing,
        onClick: () => {
          // Open modal and allow shooting NPC
          window.openModal({
            npc: {
              name: "Test",
              clothing: npcClothing,
            },
            jsx: "Shoot me if you can!",
            onShoot: (projectileType) => {
              // Handle shooting action based on projectile type
              switch (projectileType) {
                case "blueberry":
                  // Code to shoot using blueberryProjectile properties
                  console.log("Blueberry projectile shot!");
                  break;
                case "orange":
                  // Code to shoot using orangeProjectile properties
                  console.log("Orange projectile shot!");
                  break;
                case "apple":
                  // Code to shoot using appleProjectile properties
                  console.log("Apple projectile shot!");
                  break;
                default:
                  console.log("Unknown projectile type!");
              }
            },
          });
        },
      },
    ]);

    // Other initialization and game logic...
  }
}
