

let twitchGlobalEmotes = {};
let bttvEmotes = {};
let customEmotes = {}


let NTHelper = {
	fetch(...args) {
		return new Promise((resolve, reject) => {
			fetch(...args) .then((response) => {
				response.json().then((json) => {
					if (response.status === 200) {
						resolve(json);
					}
					else {
						reject(json);
					}
				});
			});
		});
	},
}
/*
function replaceText(text)  {
    let split = text.split(' ');
    let newText = [];
    for (let word of split) {
        let sword = word.toLowerCase();
        if (bttvEmotes[sword]) {
            word = '<img class="emote-chat emoji yt-formatted-string style-scope yt-live-chat-text-message-renderer" style="vertical-align: middle;	width: 32px; height: 32px;margin: -1px 2px 1px;" src="https://cdn.betterttv.net/emote/' + bttvEmotes[sword] + '/1x" alt="' + word + '" title="' + word + '" />';
        }
        else if (twitchGlobalEmotes[sword]) {
            word = '<img class="emote-chat emoji yt-formatted-string style-scope yt-live-chat-text-message-renderer" style="vertical-align: middle;	width: 32px; height: 32px;margin: -1px 2px 1px;" src="https://static-cdn.jtvnw.net/emoticons/v1/' + twitchGlobalEmotes[sword] + '/1.0" alt="' + word + '" title="' + word + '" />';
        } else if(customEmotes[sword]){
                let customEmote = customEmotes[sword];
                word = '<img class="emote-chat emoji yt-formatted-string style-scope yt-live-chat-text-message-renderer" style="vertical-align: middle;	width: 32px; height: 32px;margin: -1px 2px 1px;" src="https://cdn.jsdelivr.net/gh/bhavita/YTStreamChat/assets/emotes/' + customEmote.cat + "/" +  customEmote.id + "." + customEmote.ext  + '" alt="' + word + '" title="' + word + '" />';
        }

        newText.push(word);
    }

    return newText.join(' ');
}*/

let SYNC_THRESHOLD = 7200000; //1000*60*60*2

function Custom () {
		return new Promise((resolve) => {
		
			NTHelper.fetch('https://cdn.jsdelivr.net/gh/bhavita/YTStreamChat/assets/dictionary.json').then((data) => {

				if(data && data.emotes){
					for(let emote of data.emotes){
						let w = {
							"id" :  emote.id,
							"ext" : emote.ext,
							"cat" : emote.cat
						}

						customEmotes[emote.code] = w;
					}
				}	
                console.log(customEmotes)
                resolve(customEmotes)

				//chrome.storage.local.set({ customEmotes: customEmotes}, () => resolve()); 
			});

        })
	
};

function  Twitch  () {
  
        return new Promise((resolve) => {
         
               NTHelper.fetch('https://api.twitchemotes.com/api/v4/channels/0').then((data) => {
                   Twitch.lastUpdate = Date.now();
                   for (let emote of data.emotes) {
                       if (emote.code.match(/^[a-zA-Z0-9]+$/)) {
                           twitchGlobalEmotes[emote.code.toLowerCase()] = emote.id;
                       }
                   }
                   //chrome.storage.local.set({ globalTwitchEmotes: twitchGlobalEmotes }, () => resolve());
                   resolve(twitchGlobalEmotes)

               })

          

       });
};


function BTTV() {
   
    // const fetchTopEmotes = () =>{
    //     return new Promise((resolve) => {
    //         var noBttv = typeof bttvEmotes === 'undefined' || bttvEmotes.length == 0;
    //         if(noBttv){
    //             bttvEmotes = items.bttvEmotes || {};
    //         }

    //         if (noBttv || Date.now() - BTTV.lastUpdateTopEmotes > SYNC_THRESHOLD) {
    //             return NTHelper.fetch('https://api.betterttv.net/3/emotes/shared/top?offset=0&limit=100').
    //                 then((data) => {
    //                 for (let d of data) {
    //                     let emote = d.emote;
    //                     bttvEmotes[emote.code.toLowerCase()] = emote.id;
    //                 }
    //             }).finally(() => {
    //                 BTTV.lastUpdateTopEmotes = Date.now();
    //                 chrome.storage.local.set({bttvEmotes :  bttvEmotes }, () => resolve());
    //             });
    //         }
    //         else {
    //             resolve();
    //         }
    //     });
    // },


        return new Promise((resolve) => {
            
                return NTHelper.fetch('https://api.betterttv.net/3/emotes/shared/top?offset=0&limit=100').
                    then((data) => {
                    for (let d of data) {
                        let emote = d.emote;
                        bttvEmotes[emote.code] = emote.id;
                    }
                    resolve(bttvEmotes);
                })
                
          
        });

    


};

export  {Twitch,BTTV,Custom};

