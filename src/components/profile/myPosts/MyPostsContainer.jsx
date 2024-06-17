import React from "react";
import MyPosts from './posts/MyPosts';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer'

const MyPostsContainer =(props)=> {


let onAddMessage = () => {
  props.dispatch(addPostCreator());
}

let onPostChange = (text) => {
  props.dispatch(updateNewPostTextCreator(text));

}

    return (
        <div> 
         <MyPosts
         updateNewPostText = {onPostChange}
         addPost = {onAddMessage}
        posts = { props.state.profilePage.postsArray}
        newPostText = {props.state.profilePage.newPostText}
         />   
        </div>)
}

export default MyPostsContainer;

/*Таким образом, в контейнерную компоненту
приходит dispatch вместе с функциями-
криейторами. Затем в теге MyPosts результаты
вызова функций-криейтров присваиваются в 
функции-колбеки, прописанные как атрибуты
тега MyPosts. И далее эти функции, как 
колбеки, сбрасываются в компоненту MyPosts.
Далее см.файл MyPosts
*/