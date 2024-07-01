
//import  {rerenderEntireTree} from './redux/state'

import store from './redux/state';
import React from 'react';
 
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './StoreContext';

 

 const container = document.getElementById('root');
const root = createRoot(container);



 let rerenderEntireTree =(store) => {
  
 root.render(
<BrowserRouter>
<StoreContext.Provider value = {store}> 
<App 
//  state = {state}    
// dispatch = {store.dispatch.bind(store)}
// store = {store}
/>
</StoreContext.Provider > 
</BrowserRouter>);
     
}

console.log(store)

 rerenderEntireTree (store);


 store.subscribe ( (store) => {

      rerenderEntireTree(store)
 })

