import { Character } from "./Character";

export class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");
    this.attack = 100;
    this.defence = 400;
  }
}