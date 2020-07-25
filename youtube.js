const YouTube = require('./node_modules/youtube-node');

const config = require('./yt-config.json');


const youTube = new YouTube();

youTube.setKey(config.key);

function searchVideoUrl(message, queryText){
    return new Promise ((resolve, reject) => {
        youTube.search('Exercício para '+ queryText, 2, function(error, result){
            if(!error){
                const videoIds = result.items.map((item) => item.id.videoId).filter(item => item);
                const youtubeLinks = videoIds.map(videoId => 'https://www.youtube.com/watch?v='+{videoId})
                resolve(message + ' ' + youtubeLinks.join(', '));
            } else{
                reject('Deu erro!')
            }
        });
    });    
};

module.exports.searchVideoUrl = searchVideoUrl;
