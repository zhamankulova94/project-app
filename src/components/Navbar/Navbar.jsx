import { NavLink } from 'react-router-dom'
import cl from './Navbar.module.css'
import Friends from './../Friends/Friends';

const Navbar = (props) => {
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
    <NavLink to='/news' className={activeLink}>News</NavLink>
   </div>
   <div className={cl.item}>
    <NavLink to='/music' className={activeLink}>Music</NavLink>
   </div>
   <div className={cl.item}>
    <NavLink to='/settings' className={activeLink}>Settings</NavLink>
   </div>   
   <Friends data={props.data} />
  </nav>
 )
}

export default Navbar