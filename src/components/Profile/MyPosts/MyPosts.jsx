import cl from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
 return(
  <div className={cl.container_posts}>    
      My Posts
      <div>
        <div>
          <textarea defaultValue='hello world'></textarea>
        </div>
        <div>
          <button>Remove</button>
        </div>
      </div> 
    <div className={cl.posts}>
      <Post message='Hello, how are you' likesCount='15' />
      <Post message='Where have you been?' likesCount='22' />
    </div>
  </div>
 )
}

export default MyPosts