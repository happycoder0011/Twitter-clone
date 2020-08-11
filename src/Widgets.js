import React from 'react';
import './Widgets.css';
import SearchIcon from "@material-ui/icons/Search";
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed} from "react-twitter-embed";
function Widgets() {
    return (
        <div className="widgets">
         <div className="widgets__input">
             <SearchIcon className="widget__searchIcon"/>
             <input placeholder="search twitter" type="text" />
         </div>
        <div className="widget__widgetContainer">
            <h2>What's Happening??</h2>
            <TwitterTweetEmbed tweetId={"1293097411330506752"}/>
            <TwitterTimelineEmbed sourceType="Profile" screenName="YatharthArora8" options ={{height:400}}/>
            <TwitterShareButton url={"https://github.com/happycoder0011"} options={{text:"#reactjs is awesome" , via:"sheetal singh"}}/>
        </div>
        </div>
    )
};

export default Widgets
