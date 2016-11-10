import { game } from '../lib/game.js';
import dataStore from '../lib/dataStore';

const gameState = {
  create: function create() {
    let style = { font: "65px Arial", fill: "#ff0044", align: "center" };
    let text = game.add.text(game.world.centerX, game.world.centerY, "Five second game state", style);
    text.anchor.set(0.5);

    setTimeout(function () {
      game.state.start('end');
    }, 5000);
  }
};

export default gameState;
