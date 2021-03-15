import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  console.log(props.message)
  return (
    <div>
      <div className={classes.item}>
        <img src='https://avatarko.ru/img/kartinka/17/kot_naushniki_16067.jpg' />
        {props.message}
      </div>
      <div>
        <span>like</span>
      </div>
    </div>
   
  );
}

export default Post;