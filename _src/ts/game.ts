import {GameEngineModule} from "./GameEngine/_gameEngine.js";
import {AudioManagerModule} from "./GameEngine/Audio/_audioManager.js";

export module GameModule {
    export class GameMain extends GameEngineModule.GameEngine {

        constructor() {
            super( "playfield", 1 );
        }

        input() : void {
            super.input();
        }

        update() : void {
            super.update();
        }

        render() : void {
            super.render();
        }

        audio() : void {
            super.audio();

            // Test audio playback
            console.log("playtest");
            super.audioMgr().playSfx("player");
        }

    }
}
