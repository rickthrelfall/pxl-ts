export var PlayfieldModule;
(function (PlayfieldModule) {
    class PlayfieldInfo {
        constructor() {
            this.xOrigin = 0;
            this.yOrigin = 0;
            this.width = 10;
            this.height = 10;
        }
        setInfo(xOrigin, yOrigin, width, height) {
            this.xOrigin = xOrigin;
            this.yOrigin = yOrigin;
            this.width = width;
            this.height = height;
        }
    }
    PlayfieldModule.PlayfieldInfo = PlayfieldInfo;
})(PlayfieldModule || (PlayfieldModule = {}));
//# sourceMappingURL=_playfieldInfo.js.map