//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogues from './components/dialogues/Dialogues';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

 const App = (props) => {
debugger;
 return (
 <BrowserRouter>
  <div className="app-wrapper">
    <Header/>
    <Navbar/>
    <div className = "app-wrapper-content">
    
      <Routes>
      {/* <Route path = "/dialogues" element = {<Dialogues/>}/>
      <Route path = "/profile" element = {<Profile/>}/> */}

      {/* <Route path = "/profile" element ={ <Profile posts ={props.posts}/>}/>
      <Route path = "/dialogues" element={<Dialogues dialogues = {props.dialogues} messages = {props.messages}/>}/> */}

      <Route path = "/profile" 
      element ={ <Profile posts ={props.appState.postsArray}/>}/>
      <Route
       path = "/dialogues" 
      element={<Dialogues dialogues = {props.appState.dialoguesArray} 
      messages = {props.appState.messagesArray}/>}/>
      </Routes>     
     {/* <Dialogues/> */}
     {/* <Profile/> */}
    </div>
  </div>
 </BrowserRouter>
 )

}

export default App;

/* (Начало в файле index.js).
Передаем в компоненту App.js пропсы, т.е.
объект из вышележащей компоненты index.js.
Далее, для тега (компоненты) Profile передаем
из пропсов данные нашего массива postsArray,
присвоенного в переменную posts. Т.е. запись
такая props.posts. Это будет объект, который
мы присвоим в переменную ( атрибут тега Profile),
которую для удобства тоже назовем posts. 
В итоге получится такая запись: 
<Profile posts ={props.posts}/>
Далее см. файл Profile.jsx
*/

// Урок 29
/* Передаем переменную appState
в пропсах нижележащим компонентам, и из
нее извлекаем dialogues, messages, posts
как соответствующие элементы объекта state
(присвоен в переменную appState), которые,
напомним, являются массивами postsArray,
messagesArray, dialoguesArray.
Соответственно,запись такая: 
posts = {props.appState.postsArray}
Далее см. Dialogues.jsx и Profile.jsx
*/



