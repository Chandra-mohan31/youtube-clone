import React,{useState} from 'react';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from "react-router-dom";

function Header() {
    const [inputSearch,setInputSearch]=useState('');
    return (
        <div className="header">
            <div className="header__left">
             
                <MenuIcon />
                <Link to="/">
                <img className="header__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" />
                </Link>
                
            </div>
            <div className="header__mid">
                <input placeholder="Search" type="text"  value={inputSearch} 
                    onChange={e=> setInputSearch(e.target.value)}

                />
                <Link to={`search/${inputSearch}`}>
                <SearchIcon  className="header__searchbtn" />
                </Link>
                
            </div>
            <div className="header__right">
              <Link to="/add_videos">
              <VideoCallIcon className="header__icons" />
              </Link>
               
                <AppsIcon className="header__icons" />
                <NotificationsIcon className="header__icons" />
                <Avatar src="https://instagram.fixm1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/96142716_243105260136258_6455976925591502848_n.jpg?_nc_ht=instagram.fixm1-1.fna.fbcdn.net&_nc_ohc=O1rHkHXOAB8AX-eidJG&oh=11ff334243bf95da1aeac06f73a88bf9&oe=5F8B6A8E" />
            </div>
        </div>
    )
}

export default Header
