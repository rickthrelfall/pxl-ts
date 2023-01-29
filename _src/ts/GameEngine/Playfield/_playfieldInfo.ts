export module PlayfieldModule {
    
    export class PlayfieldInfo {
        xOrigin: number = 0;
        yOrigin: number = 0;
        width: number = 10;
        height: number = 10;

        constructor() {
        }

        setInfo(xOrigin: number, yOrigin: number, width: number, height: number) : void {
            this.xOrigin = xOrigin;
            this.yOrigin = yOrigin;
            this.width = width;
            this.height = height;
        }
    }

}
