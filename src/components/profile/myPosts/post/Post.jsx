import React from 'react';
import cl from './Post.module.css';


const Post =(props)=> { 

      //console.log(props.message);
      
      return(
<div className={cl.item}>
      <img src="https://cdn.fishki.net/upload/post/201601/03/1800195/post-37-1100634040.jpg"/>
      {props.message}
      <div>
      <span>like:{props.likeCount}</span>
      </div>    
</div>
) 
}

export default Post;
 
