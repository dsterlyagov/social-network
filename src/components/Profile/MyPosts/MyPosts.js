import React from "react";
import Post from "./Post/Post";
import classes from './MyPosts.module.css';

const MyPosts = (props) =>{
    console.log('MyPosts')
    console.log(props)
    let postMessages = props.postsData
        .map(post=> <Post message={post.message} likesCount={post.likesCount}/>)
    let newPostElement = React.createRef();
    let addPost =() =>{
        let text = newPostElement.current.value;
//alert(text);
console.log(text);
console.log(props)
       props.addPost(text)
    }
    return  <div className={classes.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
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