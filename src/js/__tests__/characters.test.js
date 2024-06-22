// import { createCharacter } from "../app";
import { Daemon } from "../characters/Daemon";
import { Magician } from "../characters/Magician";

test("too big distance test", () => {
  const daemon = new Daemon("John");

  expect(daemon.distanceAttack(12)).toBe(0);
});

test("unknown attack value error test", () => {
  const daemon = new Daemon("John");
  daemon.attack = undefined;

  expect(() => daemon.distanceAttack(10)).toThrow(
    "The character's attack value is unknown!"
  );
});

test("usual attack test", () => {
  const magician = new Magician("John");
  magician.stoned = false;

  expect(magician.distanceAttack(2)).toBe(90);
});

test("stoned attack test", () => {
  const magician = new Magician("John");
  magician.stoned = true;

  expect(magician.distanceAttack(2)).toBe(85);
});
