import React from "react";
import st from './MyPosts.module.css';
import Post from "../post/Post";

// let postsArray = [
//   {id: 1, message: "Hi, how are you ?", likeCount:10},
//   {id: 2, message: "I've got some news for you", likeCount: 20},
//   {id: 3, message: "Hope, you are lucky", likeCount: 25} 
// ]

// let postsItems =  postsArray.map(
//   postItem =><Post id = {postItem.id} message ={postItem.message} likeCount = {postItem.likeCount}/>)

const MyPosts =(props)=> {
  
  let postsItems =  props.posts.map(
    postItem =><Post id = {postItem.id} message ={postItem.message} likeCount = {postItem.likeCount} key = {postItem.id}/>);

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
        </div>      
        </div>)
}

export default MyPosts;

/* (Начало в файле Profile.jsx)
Получаем пропсы из компоненты Profile.jsx  
Аналогичным указанным в вышележащих 
компонентах способом передаем данные из 
пропсов для файла Post.jsx , также используя
запись props.posts. В данном случае особенность
в том, что данные мы передаем в новый массив
постов, сформированный из начального postsArray
c помощью метода map:
let postsItems =  props.posts.map( postItem =><Post .../>)
*/
/* Также см. файл Dialogues.jsx:
Там аналогичным образом прописываем передачу данных
в новые массивы диалогов (dialogues) и сообщений
( messages ) с помощью метода map, передавая пропсы
в функцию Dialogues.
*/