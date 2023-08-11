import Mainscene from'./Mainscene.js';
const config ={
    width:640,
    height:640,
    type:Phaser.Auto,
    parent:'phaser-game',
    scene:[Mainscene]
};

new Phaser.Game(config);
