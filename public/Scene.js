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

    // Projectile types
    this.blueberryProjectile = {
      speed: 500,       // Fast speed
      size: 10,         // Small size
      damage: 0.25,     // Damage value
    };

    this.orangeProjectile = {
      speed: 300,       // Medium speed
      size: 20,         // Medium size
      damage: 0.3,      // Damage value
    };

    this.appleProjectile = {
      speed: 100,       // Slow speed
      size: 30,         // Big size
      damage: 0.35,     // Damage value
    };

  create() {
    super.create();

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
        x: 240,
        y: 180,
        npc: "Test",
        clothing: npcClothing,
        onClick: () => {
          window.openModal({
            npc: {
              name: "Test",
              clothing: npcClothing,
            },
            jsx: "Shot me if you can!",
          });
        },
      },
    ]);
    
  }

  // Other methods and game logic...
}
