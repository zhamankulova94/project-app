import React from 'react'
import cl from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let posts = props.postData 
  let postElements = posts.map( post => 
    <Post 
      message={post.message} 
      key={post.id}
      id={post.id} 
      likesCount={post.likesCount} 
    />)
  
  let newPostText = props.newPostText
  
  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = (e) => {
    let text = e.target.value
    props.updatePostText(text)
    // let action = {type: UPDATE_NEW_POST_TEXT, newText : text}
    // let action = updatePostTextActionCreator(text)
    // props.dispatch(action)
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
          <button onClick={ onAddPost }> Add post</button>
        </div>
      </div> 
    <div className={cl.posts}>
      {postElements}
    </div>
  </div>
 )
}

export default MyPosts