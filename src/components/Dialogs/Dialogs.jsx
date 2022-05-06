import React from 'react'
import cl from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { sendMessageCreator, updateMessageBodyCreator } from '../../redux/messages-reducer'


const Dialogs = (props) => {
  // <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
  let dialogsElements = props.data.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} src={dialog.src} />)
  let messagesElements = props.data.messageData.map( text =>  <Message message={text.message} id={text.id} /> )

  let newMessageBody = props.data.newMessageBody

  let onSendMessageChange = () => { 
    props.dispatch(sendMessageCreator())
  }
  
  let onNewMessageChange = (e) =>{
    let body = e.target.value
    props.dispatch(updateMessageBodyCreator(body))
  }
 return(
  <div className={cl.dialogs}>
    <div className={cl.dialogs_items}>    
        { dialogsElements }  
    </div>
    <div className={cl.messages}>
        <div>
          { messagesElements }
        </div>
        <div className={cl.message_text}>
          <div>
            <textarea onChange={onNewMessageChange} 
                      value={newMessageBody}
                      cols="40" rows="5">
            </textarea>
          </div>
          <div>
            <button onClick={onSendMessageChange}>Send message</button>
          </div>
        </div>
    </div>
  </div>   
 )
}

export default Dialogs