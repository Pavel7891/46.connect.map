
//import  {rerenderEntireTree} from './redux/state'

import store from './redux/state';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);


 let rerenderEntireTree =(state) => {
    
 root.render(
<BrowserRouter>
      <App 
      state = {state} 
      //addPost = {store.addPost}
      addPost = {store.addPost.bind(store)}
      //updateNewPost = {store.updateNewPost}
      updateNewPost = {store.updateNewPost.bind(store)}
      />
    </BrowserRouter>
 )
     
}

 rerenderEntireTree (store.getState());

 store.subscriber(rerenderEntireTree);

 /*прописываем взятие объекта _state и методов
 addPost и updateNewPost из store. 
 Обратим внимание на запись взятия объекта
 state ( соответствует _state в index.js) 
 с помощью "метода-геттера":
 state = store.getState()
 */

 /* Чтобы передать ф-и addPost updateNewPost из 
 state.js MyPosts.jsx ( они передаются как колбеки )
 именно как методы объекта store, их надо 
 привязать к этому объекту с помощью специального 
 метода bind
 Запист такая:
  addPost = {store.addPost.bind(store)}
  Также см. записи по уроку 37, решение проблемы.
  */

  /* Метод getState не требуется связывать с объектом
  store аналогичным методом, т.к. он вызывается здесь
  же, в index.js.
  */