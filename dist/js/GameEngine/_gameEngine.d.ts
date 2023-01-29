import { PlayfieldModule } from "./Playfield/_playfieldInfo.js";
import { AudioManagerModule } from "./Audio/_audioManager.js";
export declare module GameEngineModule {
    class GameEngine {
        canvasID: string;
        interval: number;
        playfield: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        playfieldInfo: PlayfieldModule.PlayfieldInfo;
        audioManager: AudioManagerModule.AudioManager;
        constructor(canvasID: string, fps: number);
        initialise(): void;
        input(): void;
        update(): void;
        render(): void;
        audio(): void;
        audioMgr(): AudioManagerModule.AudioManager;
        private gameTimeout;
        private gameLoop;
        startGame(): void;
    }
}
