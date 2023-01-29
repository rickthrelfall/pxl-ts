import audio from './audioconfig.json';

export module AudioManagerModule {
    
    export class AudioManager {
//        private sfx = audio.music;

        constructor() {
            console.log("AudioManager constructed");
        }

        initialise() : void {
            this.preloadAudio();
        }

        private preloadAudio() {
            // Make sure audio is available immediately
        }

        public playSfx(id : string) : void {
            const sfx = (<any>audio).sfx;

            console.log(sfx);
 //           const test : string = this.sfx[0].id;
 //           console.log(audio);
        }
    }

}
