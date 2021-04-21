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


            <div className = "main__title ext"> <h2> Download now </h2>
                             <a href="https://chrome.google.com/webstore/detail/emotesly/olhclbnmebbgkgodadbepmoifpfmbncm">
                <ExtensionIcon className="ml15" fontSize = "large"/>
                </a>
            </div>


                {/* <div className = "container">
                 <Instagram className = "insta" fontSize = "large"/>
                 </div>
                <Facebook  className = "fb"  fontSize = "large"/>
                <GitHub  className = "github" fontSize = "large"/>
                <Twitter className = "twitter" fontSize = "large"/>
                <LinkedIn  className = "linkedIn" fontSize = "large"/> */}
            </div>
            {/* <div className = "main__about">
                <div className = "main__about__title">
                    <h3>About the tool</h3>
                </div>
                <div className = "main__about__content">
              
                </div>
            </div> */}
            </div>
        </div>
    );
}

export default MainScreen;