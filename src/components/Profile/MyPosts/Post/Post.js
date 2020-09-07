import React from "react";
import classes from './Post.module.css';

const Post = (props) =>{
    return  <div className={classes.item}>
        <div className={classes.item__img}></div>
        { props.message}
    </div>
}
export default Post;