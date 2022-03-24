import cl from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id
  return(
    <div className={cl.dialog}>
    <NavLink to={path} className={ NavLink => NavLink.isActive ? cl.active : '' }> {props.name} </NavLink>
  </div> 
  )
}


export default DialogItem