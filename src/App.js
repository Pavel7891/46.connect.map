//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogues from './components/dialogues/Dialogues';
 import {BrowserRouter, Routes, Route} from 'react-router-dom';

 
 


const App = () => {
  
 return (
 <BrowserRouter>
  <div className="app-wrapper">
    <Header/>
    <Navbar/>
    <div className = "app-wrapper-content">
      <Routes>
      <Route path = "/dialogues" element = {<Dialogues/>}/>
      <Route path = "/profile" element = {<Profile/>}/>
      </Routes>     
     {/* <Dialogues/> */}
     {/* <Profile/> */}
    </div>
  </div>
 </BrowserRouter>
 )

}

export default App;

/* <Route path = "/dialogues" element = {<Dialogues/>}/> 
таким образом прописывается путь к компоненте, 
которую должен отрисовать наш роутер, через
содержащую компоненту папку. 
Роутер дает возможность выбирать между 
компонентами из списка, в пределах одного дива.
Весь наш возвращаемый див, т.е. все внутри тела
функции-компоненты ( то, что после return, в скобках),
оборачиваем в тег <BrowserRouter> </BrowserRouter>
Далее, описания путей к компонентам ( т.е.Route path = ...)?
прописывается внутри тега  Routes.
Это работает так: если Route видит путь (path) равен 
"/dialogues"? он автоматически подгружает компоненту 
<Dialogues/>. Если path изменится на что-то другое, то
компонента не отрисуется.
Предварительно надо прописать импорт данных элементов
import {BrowserRouter, Routes Route} from 'react-router-dom'
*/
