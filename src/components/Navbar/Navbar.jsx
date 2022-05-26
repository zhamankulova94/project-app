import { NavLink } from 'react-router-dom'
import cl from './Navbar.module.css'
import FriendsContainer from '../Friends/FriendsContainer';

const Navbar = () => {
    let activeLink =  NavLink => NavLink.isActive ? cl.active : ''
 return(
  <nav className={cl.nav}>
   <div className={cl.item}>
    <NavLink to='/profile' className ={activeLink}>Profile</NavLink>
   </div>
   <div className={cl.item}>
    <NavLink to='/dialogs' className ={ activeLink }>Messages</NavLink>
   </div>
   <div className={cl.item}>
    <NavLink to='/users' className ={ activeLink }>Users</NavLink>
   </div>
   <div className={cl.item}>
    <NavLink to='/news' className={activeLink}>News</NavLink>
   </div>
   <div className={cl.item}>
    <NavLink to='/music' className={activeLink}>Music</NavLink>
   </div>
   <div className={cl.item}>
    <NavLink to='/settings' className={activeLink}>Settings</NavLink>
   </div> 
   <FriendsContainer />    
  </nav>
 )
}

export default Navbar