import React,{useState,useRef} from 'react';
import "./VideoCard.css";
import {Avatar} from "@material-ui/core";
import ReactPlayer from 'react-player';

function VideosCard({Video,title,views,timestamp,channel,channelImage}) {
   // const [playing,setPlaying]=useState(false);
    {/*
   
    const videoRef = useRef(null);
    const onVideoPress =() =>{
        if(playing){
        videoRef.current.play();
        setPlaying(false);
        }
        else{
            videoRef.current.pause();
            setPlaying(true);
        }
    }
    {/*Use react-player for videos*/}
    return (
        <div className="videoCard">
            <ReactPlayer 
               
               
                
               className="videoCard__thumbnail" 
               controls url={Video} 
               height="250px"
               width="250px"
          />
             <div className="videoCard__info">
                <Avatar alt={channel} src={channelImage} className="videoCard__avatar"  />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                    </p>
                </div>

             </div>
        </div>
    )
}

export default VideosCard;