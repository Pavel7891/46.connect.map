import React from "react";
import MyPosts from './posts/MyPosts';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer'
import {connect} from 'react-redux';

// const MyPostsContainer =()=> {
  
//   return (

// <StoreContext.Consumer>
//   { 
//     (store) => {

//       let state = store.getState().profilePage;
              
//       let onAddMessage = () => {
//       store.dispatch(addPostCreator());
 
//     }
                
//       let onPostChange = (text) => {
//       store.dispatch(updateNewPostTextCreator(text))
//     console.log(text);
//       }

//   return <MyPosts
//       updateNewPostText = {onPostChange}
//       addPost = {onAddMessage}
//       posts = { state.postsArray}
//       newPostText = {state.newPostText}/>
//       }
//     }
// </StoreContext.Consumer>
// )}

let mapStateToProps =(state)=> {

  let localState = state.profilePage;

  return {
    posts:  localState.postsArray,
    newPostText: localState.newPostText
}
}


let mapDispatchToProps =(dispatch)=> {
return { 
  updateNewPostText: (text) => { 
    dispatch (updateNewPostTextCreator(text));
  },

  addPost: () => {
    dispatch (addPostCreator());
  }
  }
}
const MyPostsContainer =  connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;

 