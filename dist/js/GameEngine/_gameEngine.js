import { PlayfieldModule } from "./Playfield/_playfieldInfo.js";
import { AudioManagerModule } from "./Audio/_audioManager.js";
export var GameEngineModule;
(function (GameEngineModule) {
    class GameEngine {
        constructor(canvasID, fps) {
            this.playfieldInfo = new PlayfieldModule.PlayfieldInfo();
            this.audioManager = new AudioManagerModule.AudioManager();
            this.canvasID = canvasID;
            this.interval = 1000 / fps;
            console.log("gameEngine constructed : " + canvasID);
        }
        initialise() {
            this.playfield = document.getElementById(this.canvasID);
            this.context = this.playfield.getContext("2d");
            this.context.scale(1, 1);
            this.playfieldInfo.setInfo(0, 0, this.playfield.width, this.playfield.height);
        }
        input() {
        }
        update() {
        }
        render() {
            this.context.clearRect(this.playfieldInfo.xOrigin, this.playfieldInfo.yOrigin, this.playfieldInfo.width, this.playfieldInfo.height);
        }
        audio() {
        }
        // Temp
        audioMgr() {
            return (this.audioManager);
        }
        gameTimeout(game) {
            // Check for player controller input
            game.input();
            // Update entities (locations, collisions etc.)
            game.update();
            // Render display
            game.render();
            // Audio feedback
            game.audio();
        }
        gameLoop() {
            console.log("game loop started! interval (ms): " + this.interval.toString());
            var interval = setInterval(this.gameTimeout, this.interval, this);
            console.log(interval.toString());
        }
        startGame() {
            this.initialise();
            this.gameLoop();
        }
    }
    GameEngineModule.GameEngine = GameEngine;
})(GameEngineModule || (GameEngineModule = {}));
//# sourceMappingURL=_gameEngine.js.map