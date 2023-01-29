import {GameModule} from "./game.js";

class appMain {

    game : GameModule.GameMain = null;

    constructor() {
       console.log("Main application constructed!");

       this.game = new GameModule.GameMain();
       this.game.startGame();
   }
}

let app : appMain = new appMain();
