import { game } from '../lib/game.js';
import dataStore from '../lib/dataStore';

const introState = {
  create: function create() {
    let style = { font: "65px Arial", fill: "#ff0044", align: "center" };
    let text = game.add.text(game.world.centerX, game.world.centerY, "Intro state", style);
    text.anchor.set(0.5);
  }
};

export default introState;
