import React from 'react';
import {Instagram,Facebook,GitHub,Twitter,LinkedIn} from '@material-ui/icons';
import ExtensionIcon from '@material-ui/icons/Extension';
import './MainScreen.css'
function MainScreen(props) {
    return (
        <div className = "main__screen">
            <div className = "smain__info">
            <a href="https://chrome.google.com/webstore/detail/emotesly/olhclbnmebbgkgodadbepmoifpfmbncm">
            <img className="logo" src= {process.env.PUBLIC_URL+"/img/icon.png"} href="https://chrome.google.com/webstore/detail/emotesly/olhclbnmebbgkgodadbepmoifpfmbncm"/>
            </a>
            <div className = "main__title">
                <h2  >Hi, This is </h2>
                <h2 className = "title__effect ">EMOTESLY</h2>
            </div>

            <div className = "text__container">
                    <h2 className = "text__effect title__delete"> Youtube chat enhanced. </h2>
            </div>
            <div>
                {/* <div className = "container">
                <Instagram className = "insta__icon" fontSize = "large"/>
                <div className = "insta__loader"></div>
                </div> */}

            <div class= "glinks">
              <a href="https://chrome.google.com/webstore/detail/emotesly/olhclbnmebbgkgodadbepmoifpfmbncm">

            <div className = "main__title ext"> <h2>Click to download now </h2>
                <ExtensionIcon className="ml15" fontSize = "large"/>
            </div>
                            </a>

            </div>
                <div class="mouse_scroll">

        <div class="mouse">
            <div class="wheel"></div>
        </div>
        <div>
            <span class="m_scroll_arrows unu"></span>
            <span class="m_scroll_arrows doi"></span>
            <span class="m_scroll_arrows trei"></span>
        </div>
</div>


                {/* <div className = "container">
                 <Instagram className = "insta" fontSize = "large"/>
                 </div>
                <Facebook  className = "fb"  fontSize = "large"/>
                <GitHub  className = "github" fontSize = "large"/>
                <Twitter className = "twitter" fontSize = "large"/>
                <LinkedIn  className = "linkedIn" fontSize = "large"/> */}
            </div>

            </div>
        </div>
    );
}

export default MainScreen;