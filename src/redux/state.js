import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        postsArray: [
            {id: 1, message: "Hi, how are you ?", likeCount:10},
            {id: 2, message: "I've got some news for you", likeCount: 20},
            {id: 3, message: "Hope, you are lucky", likeCount: 25} 
          ],
        newPostText:'new text',
       
        },

    dialoguesArray: [
            {id:1, name:'Pavel'},
            {id:2, name:'Andrey'},
            {id:3, name:'Nicolay'},
            {id:4, name:'Alina'},
            {id:5, name:'Maria'},
            {id:6, name:'Victor'}
        ], 

    messagesArray: [
            {id:1, message:'Hi'},
            {id:2, message:'How are you ?'},
            {id:3, message:'I love It-kamasutra'},
            {id:4, message:'That is a great course'},
        ],

}

export let addPost = ()=> { 
    //debugger;
    let newPost = {
        id: state.profilePage.newPostText.id,
        message: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.postsArray.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPost = (newText) => {
  state.profilePage.newPostText = newText;
  console.log(newText);
  rerenderEntireTree(state);
}

export default state;

/*Урок 34
Добавим в profilePage, помимо postsArray,
еще одно свойство -- newPostText. Это будет
значение для поля ввода textarea.
Его также передадим в пропсах до 
файла Posts.jsx
*/
/* Добавим в файл state также функцию
перерисовки данных,updateNewPost, которая 
срабатывает каждый раз при перерисовке 
компонента ui и изменяет наш state.js.
Эта функция срабатывает при действии
обработчика событий onChange, атрибута
для поля ввода textarea; и затем значение
value, введенное в поле ввода ( каждый символ)
отправляется в state.js.
Т.е. при введении любого символа в textarea и, 
следовательно, запуском ф-и onPostChange, 
запускается также функция updateNewPost; 
она передается в MyPosts.jsx через пропсы, 
аналогично  addPost.
В параметры ф-и updateNewPost приходит newText. 
В эту переменную присваивается 
state.profilePage.newPostText т.е. текст, 
вводимый в поле ввода textarea (в файле MyPosts.jsx
этот параметр называется text ) и после 
нажатия кнопки уходящий в bll, 
т.е. в  state.js.
*/

