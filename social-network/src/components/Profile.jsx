import React from 'react';
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
          <div>
            My posts
            <div>
              New post 
            </div> 
            <div className={classes.posts}>
              <div className={classes.item}>
                post1
              </div>
              <div className={classes.item}>
                post2
              </div>
            </div>
          </div>
        </div>
      
    );
}

export default Profile ;