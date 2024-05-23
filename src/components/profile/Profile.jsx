import React from "react";
import st from './Profile.module.css';
import MyPosts from "./myPosts/posts/MyPosts";
import ProfileInfo from './profileinfo/ProfileInfo';
//import { addPost } from "../../redux/state";
 

const Profile =(props)=> {

    return (
    <div>
        <ProfileInfo/>
        <MyPosts posts = {props.posts} addPost = {props.addPost}/>
    </div>)
}

export default Profile;
 

