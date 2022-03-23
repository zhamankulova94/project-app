import cl from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  let postData = [
    {id: 1, message: 'Hello, how are you', likesCount: 15},
    {id: 2, message: 'Where have you been?', likesCount: 22}
  ]

  let postElements = postData.map(post => <Post message={post.message} likesCount={post.likesCount} />)

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
      {postElements}
    </div>
  </div>
 )
}

export default MyPosts