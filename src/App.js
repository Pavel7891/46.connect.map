
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
      element ={ <Profile posts ={props.state.profilePage.postsArray} addPost = {props.addPost} />}/>
      <Route
       path = "/dialogues" 
      element={<Dialogues dialogues = {props.state.profilePage.dialoguesArray} 
      messages = {props.state.messagesArray}/>}/>
      </Routes>     
     
    </div>
  </div>
 )

}

export default App;

// Урок 32:
/* начало в index.js, 32
опрокидываем в пропсах для Profile
функцию добавления новых постов addPost
аналогичным ( как в index.js) способом.
И так до MyPosts.jsx.
(импорт доводим до Post.jsx, где 
эта функция прописана).
Далее см. MyPosts.jsx
*/
 



