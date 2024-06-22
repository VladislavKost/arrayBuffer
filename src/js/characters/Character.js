export class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
    this.stoned = false;
  }

  distanceAttack(distance) {
    if (!(distance > 0 && distance < 11)) {
      return 0;
    }
    if (!this.attack) {
      throw new Error("The character's attack value is unknown!");
    }
    let distanceAttackValue = this.attack - this.attack * (distance - 1) * 0.1;
    if (this.stoned) {
      distanceAttackValue = distanceAttackValue - Math.log2(distance) * 5;
    }
    return distanceAttackValue;
  }
}
