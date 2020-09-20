import React from 'react';
import Header from "./Header";
import './App.css';
import Sidebar from "./Sidebar";
import RecVideos from "./RecVideos";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import SearchPage from "./SearchPage";
import AddVideos from './AddVideos';

function App() {
  return (
    <div className="app">
    <Router>
     <Header />
      <Switch>
      
       <Route path="/search/:searchTerm">
        <div className="app__pages">
        <Sidebar />
        <SearchPage />
        </div>
         
       </Route>
       <Route path="/add_videos">
         <AddVideos />
       </Route>
        <Route path="/">
          
          <div className="app__pages">
            <Sidebar />
            <RecVideos />
          </div>
          
        </Route>
      </Switch>
    </Router>
    


    </div>
  );
}

export default App;
