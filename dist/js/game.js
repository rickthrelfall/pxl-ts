import { GameEngineModule } from "./GameEngine/_gameEngine.js";
export var GameModule;
(function (GameModule) {
    class GameMain extends GameEngineModule.GameEngine {
        constructor() {
            super("playfield", 1);
        }
        input() {
            super.input();
        }
        update() {
            super.update();
        }
        render() {
            super.render();
        }
        audio() {
            super.audio();
            // Test audio playback
            console.log("playtest");
            super.audioMgr().playSfx("player");
        }
    }
    GameModule.GameMain = GameMain;
})(GameModule || (GameModule = {}));
//# sourceMappingURL=game.js.map