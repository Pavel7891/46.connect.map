import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import state from './redux/state';
import { BrowserRouter } from 'react-router-dom';

// let postsArray = [
//     {id: 1, message: "Hi, how are you ?", likeCount:10},
//     {id: 2, message: "I've got some news for you", likeCount: 20},
//     {id: 3, message: "Hope, you are lucky", likeCount: 25} 
//   ]

//   const dialoguesArray = [
//     {id:1, name:'Pavel'},
//     {id:2, name:'Andrey'},
//     {id:3, name:'Nicolay'},
//     {id:4, name:'Alina'},
//     {id:5, name:'Maria'},
//     {id:6, name:'Victor'}
// ]

// const messagesArray = [
//     {id:1, message:'Hi'},
//     {id:2, message:'How are you ?'},
//     {id:3, message:'I love It-kamasutra'},
//     {id:4, message:'That is a great course'},
// ]

//ReactDOM.render(<App posts = {postsArray} dialogues = {dialoguesArray} messages = {messagesArray}/>, document.getElementById('root'));


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App appState = {state}/>
    {/* <App posts = {postsArray} dialogues = {dialoguesArray} messages = {messagesArray}/> */}
  </BrowserRouter>
);
 
/* Данные bll следует выносить в самый 
верхний компонент, т.е. index.js. В нашем
случае данные -- это массивы postsArray,
DialoguesArray, MessagesArray.
На примере postsArray покажем путь данных
между компонентами.
Объявим в теге App переменную posts в виде
атрибута и присвоим в нее массив postsArray.
Это выглядит так. 
<App posts = {postsArray}/>
Теперь данные этого массива хранятся в 
переменной posts.
Далее см. компоненту (функцию) App.js
*/

/* Далее урок 29. Переносим данные из трех
   массивов postsArray, dialoguesArray, 
   messagesArray в папку redux, файл state.js
   и делаем массивы элементами объекта state
   Далее см. redux/ state.js
   В теге App прописываем атрибут state:
   <App appState = {state}
   Как мы теперь понимаем, это значит, что
   далее, в нижелелащих компонентах, мы
   в пропсах передаем объект  appState,
   т.е. наши три массива с данными.
   Далее см. App.js
  */