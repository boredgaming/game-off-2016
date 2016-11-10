import { game } from '../lib/game.js';
import dataStore from '../lib/dataStore';

const endState = {
  create: function create() {
    // We don't have anything to do yet, just go to the next state.
    let style = { font: "65px Arial", fill: "#ff0044", align: "center" };
    let text = game.add.text(game.world.centerX, game.world.centerY, "End state", style);
    text.anchor.set(0.5);

    // game.state.start('load');
  }
};

export default endState;
