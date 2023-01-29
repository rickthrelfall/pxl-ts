import { GameModule } from "./game.js";
class appMain {
    constructor() {
        this.game = null;
        console.log("Main application constructed!");
        this.game = new GameModule.GameMain();
        this.game.startGame();
    }
}
let app = new appMain();
//# sourceMappingURL=app.js.map