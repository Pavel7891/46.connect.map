import React from "react";
import st from './MyPosts.module.css';
import Post from "../post/Post";
//import { addPost } from "../../../../redux/state";

// let postsArray = [
//   {id: 1, message: "Hi, how are you ?", likeCount:10},
//   {id: 2, message: "I've got some news for you", likeCount: 20},
//   {id: 3, message: "Hope, you are lucky", likeCount: 25} 
// ]

// let postsItems =  postsArray.map(
//   postItem =><Post id = {postItem.id} message ={postItem.message} likeCount = {postItem.likeCount}/>)

const MyPosts =(props)=> {

  let newPostElement = React.createRef();

  let postsItems =  props.posts.map(
    postItem =><Post id = {postItem.id} message ={postItem.message} likeCount = {postItem.likeCount} key = {postItem.id}/>);


let addMessage = () => {

  props.addPost();
}
// let addMessage = () => {
  
//  let text =`New Post: ${newPostElement.current.value}`;
//  props.addPost(text);
//  props.updateNewPost('');
// }


let onPostChange = () => {

let text =newPostElement.current.value;
props.updateNewPost(text);
  console.log(text);
}

// let onPostChange = ()=> {
//   console.log('Pavel Docenko')
// }

    return (
        <div className = {st.postsBlock} >
          <h3>My posts</h3>
          <div>
            <div>
               <textarea 
               ref = {newPostElement} 
              value = {props.newPostText}
              onChange = {onPostChange}
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


 

