//import  {rerenderEntireTree} from './redux/state'

import store from "./redux/state";
import React from "react";

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//import StoreContext from './StoreContext';
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);

let rerenderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App
        //  state = {state}
        // dispatch = {store.dispatch.bind(store)}
        // store = {store}
        />
      </Provider>
    </BrowserRouter>
  );
};

rerenderEntireTree();

/*
Благодаря использованию метода connect () ()
нам больше не нужна подписка, для перерисовки
данных хватает rerenderEntireTree. 
Соответственно, нам больше не нужен метод
subscribe:
 store.subscribe = () => {
      rerenderEntireTree()
 }
Теперь каждый раз, когда наш state  изменяется,
запускатеся метод connect, вызываются 'функции-маперы'
( См. DialoguesContainer.jsx ), 
и формируется новый объект. Однако, как мы знаем, 
новый объект не равен прежнему. Поэтому, если мы 
например, добавляем новый пост в messagesArray, 
и получаем новый объект, который не равен прежнему.
Однако все остальное в массиве messagesArray остается
прежним, и ф-я connect его не перерисовывает.
*/
/* Поэтому для работы с изменившимся объектом надо сделать
его копию. Это выполняется в функциях-редусерах
Далее см. profile-reducer и dialogues-reducer.
*/
