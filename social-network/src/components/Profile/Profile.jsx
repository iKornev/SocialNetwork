import React from 'react';
import MyPosts from './MyPosts/Post/MyPost';

import classes from './Profile.module.css';

const Profile  = () => {
    return (
      <div className={classes.content}>
          <div>
          <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" alt="картинка" width="100%" height="300"/>
          </div>
          <div>
            ava + description 
          </div>
          <MyPosts/>
        </div>
      
    );
}

export default Profile ;