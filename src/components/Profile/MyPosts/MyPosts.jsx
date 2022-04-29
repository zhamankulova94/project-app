import React from 'react'
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/state'
import cl from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  
  let postElements = props.data.postData.map( post => 
    <Post 
      message={post.message} 
      id={props.id} 
      likesCount={post.likesCount} 
    />)
  
  let newPostText = props.data.newPostText
  
  let addPost = () => {
    props.dispatch(addPostActionCreator())
    // props.addNewPost()
  }

  let onPostChange = (e) => {
    let text = e.target.value
    // props.updatePostText(text)
    props.dispatch(updatePostTextActionCreator(text))
  }
 return(
  <div className={cl.container_posts}>    
      <h3> My Posts</h3>
      <div>
        <div>
          <textarea 
            onChange={onPostChange} 
            value={newPostText} />
        </div>
        <div>
          <button onClick={ addPost }> Add post</button>
        </div>
      </div> 
    <div className={cl.posts}>
      {postElements}
    </div>
  </div>
 )
}

export default MyPosts