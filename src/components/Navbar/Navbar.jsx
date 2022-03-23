import { NavLink } from 'react-router-dom'
import cl from './Navbar.module.css'

const Navbar = () => {
 return(
  <nav className={cl.nav}>
   <div className={cl.item}>
    <NavLink to='/profile' className ={ NavLink => NavLink.isActive ? cl.active : '' }>Profile</NavLink>
   </div>
   <div className={cl.item}>
    <NavLink to='/dialogs' className ={ NavLink => NavLink.isActive ? cl.active : '' }>Messages</NavLink>
   </div>
   <div className={cl.item}>
    <NavLink to='/news' className={NavLink => NavLink.isActive ? cl.active : ''}>News</NavLink>
   </div>
   <div className={cl.item}>
    <NavLink to='/music' className={NavLink => NavLink.isActive ? cl.active : ''}>Music</NavLink>
   </div>
   <div className={cl.item}>
    <NavLink to='/settings' className={NavLink => NavLink.isActive ? cl.active : ''}>Settings</NavLink>
   </div>
  </nav>
 )
}

export default Navbar