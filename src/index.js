import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { setUpGame } from './lib/game';
import bootState from './states/boot';
import loaderState from './states/loader';
import menuState from './states/menu';
import gameState from './states/game';
import endState from './states/end';

let game = setUpGame();

// Load states
game.state.add('boot', bootState);
game.state.add('load', loaderState);
game.state.add('menu', menuState);
game.state.add('game', gameState);
game.state.add('end', endState);

// Start your engines! (Get it? Like game engines...)
game.state.start('boot');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
