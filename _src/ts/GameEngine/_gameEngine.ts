import {PlayfieldModule} from "./Playfield/_playfieldInfo.js";
import {AudioManagerModule} from "./Audio/_audioManager.js";
import {GameEntityModule} from "./Entity/_gameEntityManager.js";

export module GameEngineModule {
    export class GameEngine {

        canvasID: string;
        interval: number;
        playfield: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        playfieldInfo: PlayfieldModule.PlayfieldInfo = new PlayfieldModule.PlayfieldInfo();
        audioManager: AudioManagerModule.AudioManager = new AudioManagerModule.AudioManager();
    
        constructor(canvasID: string, fps: number) {
            this.canvasID = canvasID;
            this.interval = 1000 / fps;
            console.log("gameEngine constructed : " + canvasID);
        }
    
        initialise() : void {
            this.playfield = document.getElementById(this.canvasID) as HTMLCanvasElement;
            this.context = this.playfield.getContext("2d");
            this.context.scale(1, 1);
            this.playfieldInfo.setInfo(0, 0, this.playfield.width, this.playfield.height);
        }

        input() : void {
        }
    
        update() : void {
        }
    
        render() : void {
            this.context.clearRect(this.playfieldInfo.xOrigin, this.playfieldInfo.yOrigin, this.playfieldInfo.width, this.playfieldInfo.height);
        }

        audio() : void {
        }

        // Temp
        audioMgr() : AudioManagerModule.AudioManager {
            return( this.audioManager );
        }
    
        private gameTimeout(game: GameEngine) {
            // Check for player controller input
            game.input();

            // Update entities (locations, collisions etc.)
            game.update();

            // Render display
            game.render();

            // Audio feedback
            game.audio();
        }
    
        private gameLoop() {
            console.log("game loop started! interval (ms): " + this.interval.toString());
            var interval = setInterval(this.gameTimeout, this.interval, this);
            console.log(interval.toString());
        }
    
        startGame() {
            this.initialise();
            this.gameLoop();
        }

    }
}
