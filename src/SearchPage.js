
import React from 'react';
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";


function SearchPage() {
    return (
        <div className="searchPage">
         <div className="searchPage__filter">
             <TuneOutlinedIcon />
             <h2>FILTER</h2>
         </div>
         <hr />
           <ChannelRow
             image="https://lh3.googleusercontent.com/a-/AOh14Gjre5bJegxvceKw5qd8ymqw8CI_GeTusZxBINyKRA=s88-c-k-c0x00ffffff-no-rj-mo"
             channel="Chand"
             verified="yes"
             subs={786}
             noOfVideos={34}
             description="hey there lets code"
            />
            <hr />
            <VideoRow 
                title="Youtube Clone"
                image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s48-c-k-c0xffffffff-no-rj-mo"
                channel="Clever Programmer"
                verified
                views={455}
                subs={344}
                noOfVideos={54}
                description="lets write some code"

            />
                        <VideoRow 
                title="Youtube Clone"
                image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s48-c-k-c0xffffffff-no-rj-mo"
                channel="Clever Programmer"
                verified
                views={455}
                subs={344}
                noOfVideos={54}
                description="lets write some code"

            />
                        <VideoRow 
                title="Youtube Clone"
                image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s48-c-k-c0xffffffff-no-rj-mo"
                channel="Clever Programmer"
                verified
                views={455}
                subs={344}
                noOfVideos={54}
                description="lets write some code"

            />
                        <VideoRow 
                title="Youtube Clone"
                image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s48-c-k-c0xffffffff-no-rj-mo"
                channel="Clever Programmer"
                verified
                views={455}
                subs={344}
                noOfVideos={54}
                description="lets write some code"

            />
        </div>
    )
}

export default SearchPage
