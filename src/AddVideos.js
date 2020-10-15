import React,{useState} from 'react';
import db from "./firebase";
import "./AddVideos.css";
import firebase from "firebase";
import {Input} from "@material-ui/core";

function AddVideos() {
    const [title,setTitle]=useState('');
    const [views,setViews]=useState('');
    const [timestamp,setTimestamp]=useState('');
    const [channelImage,setChannelImage]=useState('');
    const [channel,setChannel]=useState('');
    const [video,setVideo]=useState('');
    const handleFileChosen = (e) => {
        if (e.target.files[0]){
            setVideo(e.target.files[0])
        }
}
    const handleSubmit = (e) => {
        e.preventDefault();
        //db stuff
        db.collection("videos").add({
            Video: video,
            channel: channel,
            channelImage: channelImage,
            timestamp: timestamp,
            title: title,
            views: views,
           
           
            
           
           
            //timesstamp: firebase.firestore.FieldValue.serverTimestamp(),
           
        });
       setTitle('');
       setViews('');
       setChannel('');
       setChannelImage('');
       setChannel('');
       setTimestamp('');
       setVideo('');
    }


    return (
        <div className="addVideos">
            <form className="addVideos__form">
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}  className="addVideos__input" placeholder="Title of your video" />
            <input type="text" value={views} onChange={(e)=> setViews(e.target.value)}  className="addVideos__input" placeholder="no. of views" />
            <input type="text" value={timestamp} onChange={(e)=> setTimestamp(e.target.value)}  className="addVideos__input" placeholder="Enter the date and time you are posting " /> 
            <input type="text" value={channelImage} onChange={(e)=> setChannelImage(e.target.value)}  className="addVideos__input" placeholder="channel Image URL" />
            <input type="text" value={channel} onChange={(e)=> setChannel(e.target.value)}  className="addVideos__input" placeholder="channel Name" />
           <input type="text" value={video} onChange={(e)=> setVideo(e.target.value)}  className="addVideos__input" placeholder="Video URL" /> 
            {/*<Input type="file" value={video} onChange={handleFileChosen} className="addvideos__input" placeholder="video " />*/}
                  <button className="addVideos__btn" onClick={handleSubmit} type="submit">POST VIDEO</button>
            </form>
        </div>
    )
}

export default AddVideos
{/*
             title={video.data.title}
                views={video.data.views}
                timestamp={video.data.timesstamp}
                channelImage={video.data.channelImage}
                channel={video.data.channel}
                Video={video.data.Video}
         
*/}