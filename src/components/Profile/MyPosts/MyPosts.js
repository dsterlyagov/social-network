import React from "react";
import Post from "./Post/Post";
import classes from './MyPosts.module.css';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
    console.log('111')
console.log(props)
   // debugger;
    let postMessages = props.postsData
        .map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.dispatch(sendMessageCreator())

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.updateNewPostText(text);
        console.log(text)
        props.dispatch(updateNewMessageBodyCreator(text))
    }

    return <div className={classes.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>

        </div>

        <div>
            New post
        </div>
        <div className={classes.posts}>
            {postMessages}
        </div>
    </div>
}
export default MyPosts;