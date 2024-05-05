import React from "react";
import st from './MyPosts.module.css';
import Post from "../post/Post";

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
 <Post message="Hi, how are you ?" likeCount = "10" />
 <Post message="I've got some news for you" likeCount = "20" />
 <Post message="Hope, you are lucky" likeCount = "25" />
</div>      
</div>)
}

export default MyPosts;