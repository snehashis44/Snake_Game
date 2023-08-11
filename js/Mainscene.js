import Snake from'./Snake.Js'

export default class Mainscene extends Phaser.Scene{
    constructor(){
        super('Mainscene');
    }
    create(){
        this.snake= new Snake(this);

    }
    update(time){
        this.snake.update(time);
        
    }
}