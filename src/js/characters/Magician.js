import { Character } from "./Character";

export class Magician extends Character {
  constructor(name) {
    super(name, "Magician");
    this.attack = 100;
    this.defence = 400;
  }
}
