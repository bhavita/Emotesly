import React, { useState } from 'react';
import './EmoteeCard.css'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import Pulse from 'react-reveal/Pulse';

function EmoteeCard({type,imgid,imgName,imgCode,ext,category}) {
    const [copied, setCopied] = useState(false)
    
    const copyToClipBoard = async(code) => {
        try {
            await navigator.clipboard.writeText(imgName);
            setCopied(true);
            const text = await navigator.clipboard.readText();
          } catch (err) {   
            setCopied(false);
          }
    }
    return (
        <Pulse top>

        <div className = "card" onClick = {copyToClipBoard}  >
            <div className = "card__image">
                {
                    type === "twitch" ? (<img className="emote-chat emoji yt-formatted-string style-scope yt-live-chat-text-message-renderer"  src={`https://static-cdn.jtvnw.net/emoticons/v1/${imgid}/3.0`} alt = "amotee"/> ) :
                   type === "custom" ? (<img classname="emote-chat emoji yt-formatted-string style-scope yt-live-chat-text-message-renderer"  src={`https://cdn.jsdelivr.net/gh/bhavita/YTStreamChat/assets/emotes/${category}/${imgid}.${ext}`} />)
                    :(<img className="emote-chat emoji yt-formatted-string style-scope yt-live-chat-text-message-renderer"  src={`https://cdn.betterttv.net/emote/${imgid}/3x`} alt = "amotee"/>  )           
         

                }

            </div>
            <div className = "card__name" >
                <div className = "card__name__copy" onClick = {copyToClipBoard}>
                    <div className="card__name_code">
                    {imgCode}
                    </div>
                    <FileCopyOutlinedIcon className = "copy__icon" />
                </div>
            </div>
            
        </div>
        </Pulse>    
        );
}

export default EmoteeCard;