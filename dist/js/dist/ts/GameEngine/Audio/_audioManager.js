export var AudioManagerModule;
(function (AudioManagerModule) {
    class AudioManager {
        //        private sfx = audio.sfx;
        constructor() {
            console.log("AudioManager constructed");
        }
        initialise() {
            this.preloadAudio();
        }
        preloadAudio() {
            // Make sure audio is available immediately
        }
        playSfx(id) {
            //           const test : string = this.sfx[0].id;
            //           console.log(audio);
        }
    }
    AudioManagerModule.AudioManager = AudioManager;
})(AudioManagerModule || (AudioManagerModule = {}));
//# sourceMappingURL=_audioManager.js.map