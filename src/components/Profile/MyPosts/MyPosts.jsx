import cl from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let postElements = props.postData.map( post => <Post message={post.message} likesCount={post.likesCount} />)

 return(
  <div className={cl.container_posts}>    
      <h3> My Posts</h3>
      <div>
        <div>
          <textarea defaultValue='hello world'></textarea>
        </div>
        <div>
          <button>Remove</button>
        </div>
      </div> 
    <div className={cl.posts}>
      {postElements}
    </div>
  </div>
 )
}

export default MyPosts