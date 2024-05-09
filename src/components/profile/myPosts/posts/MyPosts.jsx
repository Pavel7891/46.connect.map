import React from "react";
import st from './MyPosts.module.css';
import Post from "../post/Post";

let postsArray = [
  {id: 1, message: "Hi, how are you ?", likeCount:10},
  {id: 2, message: "I've got some news for you", likeCount: 20},
  {id: 3, message: "Hope, you are lucky", likeCount: 25} 
]

let postsItems = postsArray.map(
  postItem =><Post id = {postItem.id} message ={postItem.message} likeCount = {postItem.likeCount}/>)

const MyPosts =()=> {
    return (
        <div className = {st.postsBlock} >
          <h3>My posts</h3>
          <div>
            <div>
               <textarea></textarea>
            </div>
            <div>
               <button>Add button</button>
            </div>     
          </div>
          <div>
          New posts.
        </div>
        <div className={st.posts}>
          {postsItems}
          
 {/* <Post id={postsArray[0].id} message={postsArray[0].message} likeCount={postsArray[0].likeCount} />
 <Post id={postsArray[1].id} message={postsArray[1].message} likeCount={postsArray[1].likeCount} />
 <Post id={postsArray[2].id} message={postsArray[2].message} likeCount={postsArray[2].likeCount} /> */}
</div>      
</div>)
}

export default MyPosts;

