import React from 'react'
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/state'
import cl from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let postElements = props.postData.map( post => 
    <Post 
      message={post.message} 
      id={props.id} 
      likesCount={post.likesCount} 
    />)
  
  let refLink = React.createRef()

  
  let addPost = () => {
    props.dispatch(addPostActionCreator())
    // props.addNewPost()
  }

  let onPostChange =  () => {
    let text = refLink.current.value
    // props.updatePostText(text)
    let action = updatePostTextActionCreator(text)
    props.dispatch(action)
  }

 return(
  <div className={cl.container_posts}>    
      <h3> My Posts</h3>
      <div>
        <div>
          <textarea 
            onChange={onPostChange} 
            ref={refLink} 
            value={props.newPostText} />
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