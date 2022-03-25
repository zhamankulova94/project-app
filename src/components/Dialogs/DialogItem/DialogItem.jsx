import cl from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id
  let activeLink = NavLink => NavLink.isActive ? cl.active : ''
  return(
    <div className={cl.dialog}>
    <NavLink to={path} className={ activeLink }> {props.name} </NavLink>
  </div> 
  )
}


export default DialogItem