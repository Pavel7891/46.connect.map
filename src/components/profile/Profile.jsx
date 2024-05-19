import React from "react";
import st from './Profile.module.css';
import MyPosts from "./myPosts/posts/MyPosts";
import ProfileInfo from './profileinfo/ProfileInfo';
import { addPost } from "../../redux/state";
 
// let postsArray = [
//     {id: 1, message: "Hi, how are you ?", likeCount:10},
//     {id: 2, message: "I've got some news for you", likeCount: 20},
//     {id: 3, message: "Hope, you are lucky", likeCount: 25} 
//   ]

const Profile =(props)=> {

    return (
    <div>
        <ProfileInfo/>
        <MyPosts posts = {props.posts} addPost = {props.addPost}/>
    </div>)
}

export default Profile;
 

