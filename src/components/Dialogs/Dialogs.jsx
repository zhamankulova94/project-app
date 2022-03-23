import cl from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id
  return(
    <div className={`${cl.dialog} ${cl.active}`}>
    <NavLink to={path}> {props.name} </NavLink>
  </div> 
  )
}

const Message = (props) => {
  return (
    <div className={cl.dialog}> {props.message}</div>
  )
}

const Dialogs = () => {
 return(
  <div className={cl.dialogs}>
    <div className={cl.dialogs_items}>    
      <DialogItem name='Alex' id='1' />      
      <DialogItem name='Max' id='2' />      
      <DialogItem name='Alice' id='3' />      
      <DialogItem name='Kate' id='4' />      
      <DialogItem name='Jack' id='5' />      
      <DialogItem name='Sabrina' id='6' />    
    </div>
    <div className={cl.messages}>
      <Message message='Hi' />
      <Message message='Are you OK'/>
      <Message message='Yes, i am good. Thanks' />
    </div>
  </div>   
 )
}

export default Dialogs