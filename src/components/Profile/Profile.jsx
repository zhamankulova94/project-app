import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
 return(
  <div>
      <ProfileInfo />
      <MyPosts 
            newPostText={props.newPostText} 
            postData={props.data.postData} 
            dispatch={props.dispatch} 
      />       
  </div>      
 )
}

export default Profile