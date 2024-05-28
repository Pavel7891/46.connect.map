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

/* если задать конкретное значение value для textarea,
или любого поля ввода, то в панели выйдет предупреждение:
Warning: You provided a `value` prop to a form 
field without an `onChange` handler.
Т.е. говорится, что текст в поле ввода фиксирован, и 
чтобы сделать его изменяемым, нужен обработчик событий
-- onChange handler.
Вместо фиксированного значения присвоим в value 
нашего поля ввода что-то, приходящее в пропсах  
А то, что находится в поле ввода, должно прийти 
из отдела bll, т.е. с пропсами из state.js.
Следовательно, это будет свойство newPostText.
Т.е. нефиксированное значение value для textarea 
прописывается так:
value = {props.newPostText}
*/
/*Обработчик onChange для поля ввода запускает
функцию onPostChange. В свою очередь, в теле 
этой функции прописан вызов ф-и updateNewPost, 
в ее параметры для вызова приходит text, т.е.
сообщение, введенное в поле textarea.
После этого запускается выполнение ф-и 
updateNewPost в файле state.js, где параметр
text принимается как newText (см. state.js),
и, соответственно, перерисовка (ререндер) 
всего компонента ui.
*/
/* Обнуление введенного текста: мы можем обнулить
поле ввода по нажатию кнопки, и, соответствнно, 
действию addPost, только через функцию обновления
updeteNewPost. Поэтому в теле ф-и addPost пропишем
обнуление ( пустую строку) для вызова ф-и updateNewPost.
Синтаксис такой:
props.updateNewPost('');
Однако, если ф-я addPost в этом файле только вызывается,
а вся ее локига прописана в файле state.js, логичнее 
перенести туда обнуление поля ввода.
Далее см. файл state.js
*/
 

