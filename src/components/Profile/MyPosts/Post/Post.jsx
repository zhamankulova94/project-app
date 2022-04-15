import cl from './Post.module.css'

const Post = (props) => {
 return(  
  <div className={cl.item} id={props.id}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_LM8tkDUVRzWZtmpVK2ky84EwX3ffhguCnUKdKhngqlMU88IKwkBZhRWTvH31ID9dZ4&usqp=CAU" alt="" />
    
    {props.message}
    <div>
      <span> like </span> {props.likesCount}
    </div>
  </div>
 )
}

export default Post