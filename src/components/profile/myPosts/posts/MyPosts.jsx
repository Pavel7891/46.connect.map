import React from "react";
import st from './MyPosts.module.css';
import Post from "../post/Post";
//import { addPostCreator, updateNewPostTextCreator } from '../../../../redux/profile-reducer'

// let addPostActionCreator = () => {
//   return (
//   {type: 'ADD-POST'}
//   )
// }

// let updateNewPostTextActionCreator = (text)=> {
//   return (
//     {type:'UPDATE-NEW-POST-TEXT', newText: text}
//   )
// }

const MyPosts =(props)=> {

  console.log(props)

  let newPostElement = React.createRef();

  let postsItems =  props.posts.map(
    postItem =><Post 
    id = {postItem.id} 
    message ={postItem.message} 
    likeCount = {postItem.likeCount} 
    key = {postItem.id}/>);


let addMessage = () => {
  props.addPost();
   
}

let postChange = () => {

  let text = newPostElement.current.value;
  props.updateNewPostText(text);

  console.log(text);
}

    return (
        <div className = {st.postsBlock} >
          <h3>My posts</h3>
          <div>
            <div>
               <textarea 
               ref = {newPostElement} 
              value = {props.newPostText}
              onChange = {postChange}
               />
            </div>
            <div>
               <button onClick = {addMessage} > 
               Add button
               </button>
            </div>     
          </div>
          <div>
          New posts.
        </div>
        <div className={st.posts}>
          {postsItems}
        </div>      
        </div>)
}
 
export default MyPosts;



 

