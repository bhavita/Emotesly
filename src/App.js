import { useEffect, useState } from 'react';
import './App.css';
import EmoteeCard from './EmoteeCard';
import {BTTV,Twitch,Custom} from './FetchApi'
import SearchIcon from '@material-ui/icons/Search';
import {Autocomplete} from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import MainScreen from './MainScreen';
import TwitchEmotee from './TwitchEmotee';
import BttvEmotee from './BttvEmotee';
import CustomEmotee from './CustomEmotee'
import {Instagram,Facebook,GitHub,Twitter,LinkedIn} from '@material-ui/icons';
import ExtensionIcon from '@material-ui/icons/Extension';

import Slide from 'react-reveal/Slide';

const options = [
  { id: 0, value: "foo" },
  { id: 1, value: "goo" },
];

function App() {
 
  const [checkBttv, setCheckBttv] = useState(true)
  const [checktwitch, setCheckTwitch] = useState(false)
  const [checkcustom, setCheckCustom] = useState(true)
  const [checkcustomData, setCheckCustomData] = useState(true)



  const setTwitch = () =>{
    setCheckTwitch(true)  
    setCheckBttv(false)  
    setCheckCustom(false)

  }

  const setBTTV = () =>{
    setCheckTwitch(false)  
    setCheckBttv(true)  
    setCheckCustom(false)

  }

  const setCustom = () =>{
    setCheckTwitch(false)  
    setCheckBttv(false)  
    setCheckCustom(true)

  }


  

 
  // useEffect(() => {
  //   checkBttv == true? getBTTVEmotee() :  custom == true ? getCustomEmotee() :  getTwitchEmotee()
  
  // }, [searchValue])
  return (


    <div className="App">
      <div className='solar-syst'>
  <div className='sun'></div>
  <div className ='mercury'></div>
  <div className='venus'></div>
  <div className='earth'></div>
  <div className='mars'></div>
  <div className='jupiter'></div>
  <div className='saturn'></div>
  <div className='uranus'></div>
  <div className='neptune'></div>
  <div className='pluto'></div>
  <div className='asteroids-belt'></div>
  </div>
  

      <div className = "app__screen">

      <MainScreen/>

      </div>
      <div className = "app__screen__about">
      <div className = "main__about__title">
                    <h3>About EMOTESLY - INSPIRATION</h3>
                </div>
                <Slide top>

                <div className = "main__about__content">
 <p> This tool is made for exclusively made for  
 <a href ="https://www.youtube.com/channel/UCWxlUwW9BgGISaakjGM37aw" className="link">
 Valkyrae Youtube channel. 
 </a> She is one of the biggest female streamers in the world and the inspiration for Emotesly <3.
    She streams on Youtube. And Youtube by features, lacks the support of emotes and thus there is no emote culture in YT Stream chat. 
    Also the moderation tools of Youtube lack capabilities to drive a postive chat. 
    This gave an idea of having support for custom emoticons for Youtube chat as well as additional support for twitch & BTTV emote for Youtube</p>
               <p>
               <ul>
               <li>BTTV support</li>
               <li>Twitch emotes support</li>
               <li>Custom emotes for Valkyrae's Youtube channel</li>
               <li>Colored usernmess</li>
               <li>ability to hide profile pictures</li>
               <li>Youtube chat aesthetic </li>
               </ul>
             
               </p>

                               </div>
                </Slide>
      </div>
      <div className = "app__emotees__section" id="emotes">
                    <h3 className = "app__emotees__section__title">EMOTESLY</h3>
                <div className = "app__emotees__tabs">
                  <h3 className = "app__emotees__tabs__single" onClick = {setCustom} >CUSTOM EMOTES</h3>
                  <h3 className = "app__emotees__tabs__single" onClick = {setBTTV} >BTTV EMOTES</h3>
               { checkcustomData?<h3 className = "app__emotees__tabs__single" onClick = {setTwitch}>TWITCH EMOTES</h3> : <></>}
                

                </div>
              
                   {
                    checkcustom?<CustomEmotee/>: checktwitch?<TwitchEmotee checkData = {setCheckCustomData}/>:<BttvEmotee/>
                  } 
                  
                
              
      </div>
      <div className = "contact">
        <h2>Contact</h2>
        <p>
          Ideas? Thoughts? Reach out to me on 
        </p>
        <div className = "contact__icons">
                <a href ="https://twitter.com/BhavitaWasTaken">
                <Twitter className = "twitter" fontSize = "large"/>
                </a>
                 <a href="https://chrome.google.com/webstore/detail/emotesly/olhclbnmebbgkgodadbepmoifpfmbncm">

                <ExtensionIcon className = "ext" fontSize = "large"/>
                </a>

            </div>
      </div>
     
       

      
     
    </div>
  );
}

export default App;
