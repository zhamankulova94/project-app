import cl from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id
  let activeLink = NavLink => NavLink.isActive ? cl.active : ''
  return(
    <div className={cl.dialog}>
    <NavLink to={path} className={ activeLink }>
       <img src={props.src} alt="ava" />
       {props.name} 
    </NavLink>
  </div> 
  )
}


export default DialogItem