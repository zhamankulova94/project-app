import cl from './ProfileInfo.module.css'

const ProfileInfo = () => {
 return(
  <div>
    <div>
      <img src='https://i.stack.imgur.com/SvWWN.png' />
    </div>
    <div className={cl.description_block}>
      ava + description
      {/* <img src='https://cdn-icons-png.flaticon.com/512/147/147140.png' /> */}
    </div> 
  </div>
 )
}

export default ProfileInfo