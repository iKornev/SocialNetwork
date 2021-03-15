import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  // debugger;
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>

      </div>
      <div className={classes.posts}>
        <Post message='Hi, how are you?'/>
        <Post message="It's my fitst post"/>
      </div>
    </div>
  );
}

export default MyPosts;