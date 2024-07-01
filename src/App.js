
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
//import Dialogues from './components/dialogues/Dialogues';
import { Routes, Route } from 'react-router-dom';
import DialoguesContainer from './components/dialogues/DialoguesContainer';
//import { addPost } from './redux/state';

 const App = () => {

 return (
 
  <div className="app-wrapper">
    <Header/>
    <Navbar/>
    <div className = "app-wrapper-content">
    
      <Routes>
      <Route path = "/profile" 
      element ={ <Profile 
      // state = {props.state}
      // dispatch = {props.dispatch}
      />}/>
      <Route
       path = "/dialogues" 
      element={<DialoguesContainer 
      //   state = {props.state}
      // dispatch = {props.dispatch}
      />}/>
      </Routes>     
     
    </div>
  </div>
 )

}

export default App;


 



