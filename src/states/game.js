import { game } from '../lib/game.js';

const gameState = {
  create: function create() {
    // We don't have anything to do yet, just go to the next state.
    game.state.start('end');
  }
};

export default gameState;
