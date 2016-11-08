import myPhaser from '../phaser-wrap';
export let game = {};

export function setUpGame() {
  game = new myPhaser.Game(800, 600, myPhaser.AUTO, '');
  return game;
}
