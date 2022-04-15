import React from 'react'
import cl from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {

  // <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
  let dialogsElements = props.data.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} src={dialog.src} />)

  let messagesElements = props.data.messageData.map( text =>  <Message message={text.message} /> )

  let refLink = React.createRef()

  let addMessage = () => { 
    let text = refLink.current.value
    alert(text) 
  }

 return(
  <div className={cl.dialogs}>
    <div className={cl.dialogs_items}>    
        { dialogsElements }  
    </div>
    <div className={cl.messages}>
        { messagesElements }
        <div className={cl.message_text}>
          <div>
            <textarea ref={refLink} cols="40" rows="5"></textarea>
          </div>
          <div>
          <button onClick={addMessage}>Send message</button>
          </div>
        </div>
    </div>
  </div>   
 )
}

export default Dialogs