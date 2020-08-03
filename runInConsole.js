/*
    If you run the script below in your browser's console,
    you obtain a list with the commands you are supposed to run
    in order to download the videos of the playlist as mp3s.

    You can copy and paste the returned command list in
    your terminal thereafter.

 */

let videoLinks = document.getElementsByClassName("yt-simple-endpoint style-scope ytd-playlist-video-renderer");

let yt = ' youtube-dl --audio-format mp3 --audio-quality 0 -x  --no-mtime https://www.youtube.com/';
let commandString = '';

for(i=0; i<videoLinks.length; i++){
    commandString += yt + videoLinks[i].getAttribute('href').substring(0,20);
    commandString += '\n';
    console.log(yt + videoLinks[i].getAttribute('href').substring(0,20) );

}
console.log(commandString);
