import React from "react";
import st from './Profile.module.css';
import MyPosts from "./myPosts/posts/MyPosts";
import ProfileInfo from './profileinfo/ProfileInfo';
 
// let postsArray = [
//     {id: 1, message: "Hi, how are you ?", likeCount:10},
//     {id: 2, message: "I've got some news for you", likeCount: 20},
//     {id: 3, message: "Hope, you are lucky", likeCount: 25} 
//   ]

const Profile =(props)=> {

    return (
    <div>
        <ProfileInfo/>
        <MyPosts posts = {props.posts}/>
    </div>)
}

export default Profile;

/* ( Началов в App.js )
Пропсы "прокидываются" в функцию Profile.jsx
из App.js. Помним,что пропсы -- это объект с
данными, идущими изначально из index.js. 
Здесь нам нужны данные из массива postsArray, 
присвоенные в переменную posts. 
Передаем эти данные для компоненты MyPosts,
присваивая их в переменную (атрибут),также 
названную posts:
<MyPosts posts = {props.posts}
Далее см. файл MyPosts
*/

// По рузультату урока 29
/* Переменная posts = {props.posts}
несет те же данные из массива postsArray,
теперь она задана в App.js как 
posts = {props.appState.postsArray},
где appState -- это переменная, в которую 
присвоен объект state, содержащий в 
себе наши массивы, включая   postsArray.
*/

