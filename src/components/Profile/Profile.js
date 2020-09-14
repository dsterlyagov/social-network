import React from "react";
import classes from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    console.log('Profile');
    console.log(props);
    return <div className={classes.content}>

        <ProfileInfo/>
        <MyPostsContainer store={props.store}
             // posts={props.stateProfilePage.posts}
             // newPostText={props.stateProfilePage.newPostText}
             // dispatch={props.dispatch}
        />
    </div>
}

export default Profile;