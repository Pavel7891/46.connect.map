import React from "react";
import st from './Profile.module.css';
import MyPosts from "./myPosts/posts/MyPosts";
import ProfileInfo from './profileinfo/ProfileInfo';
//import { addPost } from "../../redux/state";
 

const Profile =(props)=> {

    return (
    <div>
        <ProfileInfo/>
        <MyPosts 
        posts = {props.profilePage.postsArray} 
        newPostText = {props.profilePage.newPostText}

        dispatch = {props.dispatch}
        // addPost = {props.addPost}
        // updateNewPost = {props.updateNewPost}
        />
    </div>)
}

export default Profile;
 

