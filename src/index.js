import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import myPhaser from './phaser-wrap';


var game = new myPhaser.Game(800, 600, myPhaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
}

function create() {
}

function update() {
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
