import React from 'react';
import {Instagram,Facebook,GitHub,Twitter,LinkedIn} from '@material-ui/icons';
import ExtensionIcon from '@material-ui/icons/Extension';
import './MainScreen.css'
function MainScreen(props) {
    return (
        <div className = "main__screen">
            <div className = "main__info">
            <div className = "main__title">
                <h2  >Hi, This is </h2>
                <h2 className = "title__effect ">emotesly</h2>
            </div>

            <div className = "text__container">
                    <h2 className = "text__effect title__delete"> Youtube chat enhanced. </h2>
            </div>
            <div className = "main__icons">
                {/* <div className = "container">
                <Instagram className = "insta__icon" fontSize = "large"/>
                <div className = "insta__loader"></div>
                </div> */}
                <ExtensionIcon className="ext" fontSize = "large"/>
                <Twitter className = "twitter" fontSize = "large"/>
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