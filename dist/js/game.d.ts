import { GameEngineModule } from "./GameEngine/_gameEngine.js";
export declare module GameModule {
    class GameMain extends GameEngineModule.GameEngine {
        constructor();
        input(): void;
        update(): void;
        render(): void;
        audio(): void;
    }
}
