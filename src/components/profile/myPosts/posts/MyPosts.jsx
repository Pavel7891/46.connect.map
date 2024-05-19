import React from "react";
import st from './MyPosts.module.css';
import Post from "../post/Post";
import { addPost } from "../../../../redux/state";

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
 let text =`New Post: ${newPostElement.current.value}`;
 //alert(text);
 props.addPost(text)
  
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
 let newPostElement = React.createRef()

 Затем мы привязываем новый создоваемый элемент 
 к определенному  html-тегу, где прописвывем ссылку
 на этот элемент в виде атрибута:
 <textarea ref ={newPostElement}></textarea>
 То есть, newPostElement -- это то, что мы вводим 
 в поле ввода для textarea.
 И затем прописываем вывод нового элемента 
 в всплывающем окне, таким образом:
 let text = newPostElement.current.value;
 где text -- то, что у нас получается при выполнении
 функции addPost и, соответственно, выходит в окне
 alert.
 */

// изменим вводные данные для addPost, как в уроке 32.
/* вместо вывода нового поста в alert, как было преждеб
пропишем props.addPost(text), т.е. дадим функцию addPost
так, как она записана в state.js (примем ее здесь как
callback-function)
*/
// Однако добавления новых постов нет. Почему ?
// Далее см. урок 33.
