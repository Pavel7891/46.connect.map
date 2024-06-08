
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogues from './components/dialogues/Dialogues';
import { Routes, Route } from 'react-router-dom';
//import { addPost } from './redux/state';

 const App = (props) => {

 return (
 
  <div className="app-wrapper">
    <Header/>
    <Navbar/>
    <div className = "app-wrapper-content">
    
      <Routes>

      <Route path = "/profile" 
      element ={ <Profile 
        profilePage ={props.state.profilePage} 

      dispatch = {props.dispatch}

      //  addPost = {props.addPost}
      //  updateNewPost = {props.updateNewPost} 
      />}/>
      <Route
       path = "/dialogues" 
      element={<Dialogues 
      dialogues = {props.state.dialoguesPage.dialoguesArray} 
      messages = {props.state.dialoguesPage.messagesArray}
      newMessageBody = {props.state.dialoguesPage.newMessageBody}
      dispatch = {props.dispatch}
      />}/>
      </Routes>     
     
    </div>
  </div>
 )

}

export default App;

 /*
 */
 



