
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogues from './components/dialogues/Dialogues';
import { Routes, Route } from 'react-router-dom';

 const App = (props) => {
debugger;
 return (
 
  <div className="app-wrapper">
    <Header/>
    <Navbar/>
    <div className = "app-wrapper-content">
    
      <Routes>

      <Route path = "/profile" 
      element ={ <Profile posts ={props.appState.postsArray}/>}/>
      <Route
       path = "/dialogues" 
      element={<Dialogues dialogues = {props.appState.dialoguesArray} 
      messages = {props.appState.messagesArray}/>}/>
      </Routes>     
     
    </div>
  </div>
 )

}

export default App;

 



