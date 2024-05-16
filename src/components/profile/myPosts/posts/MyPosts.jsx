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

// let addPost= () => { 
//   let text;
//   text = document.getElementById('newPost').value;
//   alert(`'Hello, Pavel!' ${text}`);
   
// }

let newPostElement = React.createRef();

let addPost = () => {
  debugger;
 let text = newPostElement.current.value;
 alert(text);
}

    return (
        <div className = {st.postsBlock} >
          <h3>My posts</h3>
          <div>
            <div>
               <textarea ref = {newPostElement} ></textarea>
            </div>
            <div>
               <button onClick = {addPost} > 
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

 /*Введем новую ф-ю addPost, и повесим ее на
 наш тег <button>Add button</button>, сделав
 такую запись:  onClick = {addPost}
 т.е. ф-я будет выполняться по нажатию кнопки.
 Реакт отличается от классического  JS способами
 взять html-элемент
 Аналагично способу взять html -элемент по id
 или классу ( document.getElementByid('element)),
 как в классическом JS, мы имеем в Реакте такую
 конструкцию, в которой дается взятие элемента по 
 ссылке:
 let newPostElement = React.createRef('newPost')

 Затем мы привязываем новый создоваемый элемент 
 к определенному  html-тегу, где прописвывем ссылку
 на этот элемент в виде атрибута:
 <textarea ref ={newPostElement}></textarea>
 И затем прописываем вывод нового элемента в поле 
 ввода, таким образом:
 let text = newPostElement.current.value;
 где text -- то, что мы вводим в поле ввода 
 для textarea, input.
 */