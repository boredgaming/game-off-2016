import { game } from '../lib/game.js';
import startButton from '../../public/img/start.svg'; // I fucking love webpack!

const loaderState = {
  preload: function() {
    // Load assets
    game.load.image('button', startButton, 90,90);
  },
  create: function create() {
    // Go to the menu
    game.state.start('menu');
  }
};

export default loaderState;
