import React from "react";
import logo from "../../fda_logo.png";
import exper from "../../img/4.jpeg"
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    console.log('Profile');
    console.log(props);
    return <div className={classes.content}>

        <ProfileInfo/>
        <MyPosts
            postsData={props.stateProfilePage.postsData}
            newPostText={props.stateProfilePage.newPostText}
            dispatch={props.dispatch}
        />
    </div>
}

export default Profile;