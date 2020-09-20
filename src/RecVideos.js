import React,{useEffect,useState} from 'react';
import "./RecVideos.css";

//import {Link} from "react-router-dom";
import VideosCard from "./VideosCard";
import db from "./firebase";

function RecVideos() {
   
   const [videos,setVideos] = useState([]);

   useEffect(()=>{
       db.collection("videos")
       
       .onSnapshot((snapshot)=>
           setVideos(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data()}))));
   }, []);
  
    return (
        <div className="recvideos">
            <h2>Recommended</h2>
            <div className="recvideos__videos">
       
          
            {
            videos.map((video)=>(
             

            <VideosCard
                title={video.data.title}
                views={video.data.views}
                timestamp={video.data.timesstamp}
                channelImage={video.data.channelImage}
                channel={video.data.channel}
                Video={video.data.Video}
         
            />
        ))
        }
            
          
            <VideosCard 
                title="welcome man"
                views="2.4 million"
                timestamp="3 days ago"
                channelImage="https://instagram.fixm1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/96142716_243105260136258_6455976925591502848_n.jpg?_nc_ht=instagram.fixm1-1.fna.fbcdn.net&_nc_ohc=O1rHkHXOAB8AX-COnlW&oh=be516b6ac8643f27b9dcf9104a61112b&oe=5F8B6A8E"
                channel="Chandra Mohan"
                Video="https://www.youtube.com/watch?v=sN93DRYkCO8&t=20s"
                

             />

            <VideosCard 
                title="welcome man"
                views="2.4 million"
                timestamp="3 days ago"
                channelImage="https://instagram.fixm1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/96142716_243105260136258_6455976925591502848_n.jpg?_nc_ht=instagram.fixm1-1.fna.fbcdn.net&_nc_ohc=O1rHkHXOAB8AX-COnlW&oh=be516b6ac8643f27b9dcf9104a61112b&oe=5F8B6A8E"
                channel="Chandra Mohan"
                Video="https://www.youtube.com/watch?v=TOgAHgJlCp4"
                

             />
           <VideosCard 
                title="welcome man"
                views="2.4 million"
                timestamp="3 days ago"
                channelImage="https://instagram.fixm1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/96142716_243105260136258_6455976925591502848_n.jpg?_nc_ht=instagram.fixm1-1.fna.fbcdn.net&_nc_ohc=O1rHkHXOAB8AX-COnlW&oh=be516b6ac8643f27b9dcf9104a61112b&oe=5F8B6A8E"
                channel="Chandra Mohan"
                Video="https://www.youtube.com/watch?v=sN93DRYkCO8&t=20s"
                

             />
          <VideosCard 
                title="welcome man"
                views="2.4 million"
                timestamp="3 days ago"
                channelImage="https://instagram.fixm1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/96142716_243105260136258_6455976925591502848_n.jpg?_nc_ht=instagram.fixm1-1.fna.fbcdn.net&_nc_ohc=O1rHkHXOAB8AX-COnlW&oh=be516b6ac8643f27b9dcf9104a61112b&oe=5F8B6A8E"
                channel="Chandra Mohan"
                Video="https://www.youtube.com/watch?v=74279PSlQbE"
                

             />
           

           
          
          
                

             {/* change every video card to videoTest components,use useref for now for playing the videos in home page
             ,Add videos/your videos page for pushing into the db,retriving the rec videos from the db,
             think for pushing to new page ,connection bw videoTest and the full screen props

             */}
             
              </div>

            </div>
        
    )
}

export default RecVideos
