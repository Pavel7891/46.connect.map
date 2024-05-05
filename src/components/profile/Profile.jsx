import React from "react";
import st from './Profile.module.css';
import MyPosts from "./myPosts/posts/MyPosts";
import ProfileInfo from './profileinfo/ProfileInfo';
 

const Profile =()=> {
    return (
    <div>
        <ProfileInfo/>
        <MyPosts/>
    </div>)
}

export default Profile;