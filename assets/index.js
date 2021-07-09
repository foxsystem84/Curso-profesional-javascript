import mediaPlayer from './MediaPlayer.js';
import AutoPlay from '../plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new mediaPlayer({
    el:video, 
    plugins: [new AutoPlay()],
});


const mute = document.querySelector("#mute");
mute.onclick = () => player.toggleMute();

const button = document.querySelector('button');
button.onclick = () => player.togglePlay();