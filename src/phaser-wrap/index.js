if(!window.Phaser) {
  console.error('Phaser not found');
}

let phaserObj = (window.Phaser) ? window.Phaser : {};

export default phaserObj; // eslint-disable-line