import React from "react";
import MyPosts from './posts/MyPosts';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer'
import StoreContext from "../../../StoreContext";

const MyPostsContainer =()=> {
  
  return (

<StoreContext.Consumer>
  { 
    (store) => {

      let state = store.getState().profilePage;
              
      let onAddMessage = () => {
      store.dispatch(addPostCreator());
 
    }
                
      let onPostChange = (text) => {
      store.dispatch(updateNewPostTextCreator(text))
    console.log(text);
      }

  return <MyPosts
      updateNewPostText = {onPostChange}
      addPost = {onAddMessage}
      posts = { state.postsArray}
      newPostText = {state.newPostText}/>
      }
    }
</StoreContext.Consumer>
)}


export default MyPostsContainer;

 