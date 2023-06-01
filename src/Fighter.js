const Weapon = require("./Weapon");
const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.weapon = null;
  }

  // Launch a fight
  fight(defender) {
    const attackPoints = this.getRandomInt(this.strength + this.getDamage());

    const damages = Math.max(attackPoints - defender.dexterity, 0);

    defender.life = Math.max(defender.life - damages, 0);
  }

  //Ajout des dommages de l'épée
  getDamage() {
    let totalDamage = this.strength;
    if (this.weapon !== null) {
      totalDamage += this.weapon.damage;
    }
    return totalDamage;
  }

  // Generate a random value between 1 and max
  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }

  // Determine if a fighter is still alive
  isAlive() {
    return this.life > 0;
  }
}

module.exports = Fighter;

