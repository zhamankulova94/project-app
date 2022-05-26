import React from 'react'
import cl from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {
  // <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
  let dialogsData = props.dialogsData
  let messageData = props.messageData

  let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} src={dialog.src} />)
  let messagesElements = messageData.map( text =>  <Message message={text.message} key={text.id} id={text.id} /> )

  let newMessageBody = props.newMessageBody

  let onSendMessageChange = () => { 
    props.sendMessage()
  }
  
  let onNewMessageChange = (e) =>{
    let body = e.target.value
    props.updateMessageBody(body)
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