import React from 'react'
import cl from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let postElements = props.postData.map( post => <Post message={post.message} likesCount={post.likesCount} />)
  
  let refLink = React.createRef()

  let addPost = () => { 
    debugger
    let text = refLink.current
    alert(text) 
  }

 return(
  <div className={cl.container_posts}>    
      <h3> My Posts</h3>
      <div>
        <div>
          <textarea ref={refLink}></textarea>
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