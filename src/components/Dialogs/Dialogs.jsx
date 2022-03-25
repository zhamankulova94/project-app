import cl from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {

  // <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
  let dialogsElements = props.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)

  let messagesElements = props.messageData.map( text =>  <Message message={text.message} /> )

 return(
  <div className={cl.dialogs}>
    <div className={cl.dialogs_items}>    
        { dialogsElements }  
    </div>
    <div className={cl.messages}>
        { messagesElements }
    </div>
  </div>   
 )
}

export default Dialogs