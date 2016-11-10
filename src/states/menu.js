import { game } from '../lib/game.js';
import dataStore from '../lib/dataStore';

const menuState = {
  create: function create() {
    let button = game.add.button(game.world.centerX, game.world.centerY, 'button', click, this, 2, 1, 0);
    button.anchor.setTo(0.5);
  }
};

function click() {
  game.state.start('game');
}

export default menuState;
