import { connect } from 'react-redux'
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

// const MyPostsContainer = (props) => {
 
//  return(
//   <StoreContext.Consumer> 
//     {(store) => {
//     let state = store.getState()
  
//     let addPost = () => {
//       store.dispatch(addPostActionCreator())
//       // props.addNewPost()
//     }
  
//     let onPostChange = (text) => {
//       // let text = e.target.value
//       // props.updatePostText(text)
//       // let action = {type: UPDATE_NEW_POST_TEXT, newText : text}
//       let action = updatePostTextActionCreator(text)
//       store.dispatch(action)
//     }
//       return (
//         <MyPosts 
//           updatePostText={onPostChange} 
//           addPost={addPost} 
//           posts={state} />  
//       )
//       }
//     }
//   </StoreContext.Consumer>
//  )
// } 

let mapStateToProps = (state) => { 
  return{
    postData : state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
} 
let mapDispatchToProps = (dispatch) => {
  return {
    updatePostText: (text) => {
      dispatch(updatePostTextActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer