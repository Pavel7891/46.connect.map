
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
    debugger;
 root.render(
<BrowserRouter>
      <App 
      state = {state}    
      dispatch = {store.dispatch.bind(store)}
      addPost = {store.addPost.bind(store)}
      updateNewPost = {store.updateNewPost.bind(store)}
      />
    </BrowserRouter>
 )
     
}

 rerenderEntireTree (store.getState());

 store.subscriber(rerenderEntireTree);

