import React from "react";
import st from './Profile.module.css';
import MyPostsContainer from './myPosts/MyPostsContainer'
import ProfileInfo from './profileinfo/ProfileInfo';
//import { addPost } from "../../redux/state";
 

const Profile =()=> {

    return (
    <div>
        <ProfileInfo/>
        <MyPostsContainer 
        // state = {props.state}
        // dispatch = {props.dispatch}
        // addPost = {props.addPost}
        // updateNewPost = {props.updateNewPost}
        />
    </div>)
}

export default Profile;
 

