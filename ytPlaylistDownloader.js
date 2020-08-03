var args = process.argv;


const got = require('got');
let mp3 = ' youtube-dl --audio-format mp3 --audio-quality 0 -x  --no-mtime https://www.youtube.com/';
let yt = ' youtube-dl -f \'bestvideo[ext=mp4]+bestaudio[ext=m4a]/mp4\'   --no-mtime https://www.youtube.com/';
if(args[3] === 'mp3'){
    yt = mp3;
}
let ytlinks = /watch\?v=([\d\D]{11})/gi

let allLinksString = '';
let linkregex = new RegExp(ytlinks);
let matches;
let uniq;

got(args[2]).then(response => {
    matches = response.body.match(linkregex);
    uniq = [...new Set(matches)];

    for (let i = 0; i < uniq.length; i++) {
        allLinksString += yt + uniq[i];
        allLinksString += '\n';
    }

}).catch(err => {
    console.log(err);
}).then(ending => {
        console.log(allLinksString);
    }
);






