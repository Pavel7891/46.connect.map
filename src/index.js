
//import  {rerenderEntireTree} from './redux/state'

import state,{subscriber} from './redux/state';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import { addPost, updateNewPost } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);


 let rerenderEntireTree =(state) => {
    
 root.render(
<BrowserRouter>
      <App 
      state = {state} 
      addPost = {addPost}
      updateNewPost = {updateNewPost}
      />
    </BrowserRouter>
 )
     
}

 rerenderEntireTree (state);

 subscriber(rerenderEntireTree);

 