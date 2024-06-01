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


// let addMessage = () => {
// debugger;
//   props.addPost();
// }


// let onPostChange = () => {

// let text =newPostElement.current.value;
// props.updateNewPost(text);
//   console.log(text);
// }

let addMessage = () => {
  props.dispatch({type:"ADD-POST"})
}

let onPostChange = () => {
  let text = newPostElement.current.value;
props.dispatch({type:"UPDATE-NEW-POST-TEXT", newText: text});

// let action = {type:"UPDATE-NEW-POST-TEXT", newText: text};
// props.dispatch(action)

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


 

