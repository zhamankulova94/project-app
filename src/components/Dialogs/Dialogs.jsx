import cl from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = () => {

  let dialogsData = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Max'},
    {id: 3, name: 'Alice'},
    {id: 4, name: 'Kate'},
    {id: 5, name: 'Jack'},
    {id: 6, name: 'Sabrina'},
  ]

  let messageData = [
    {id:1, message: 'Hi',},
    {id:2, message: 'Are you OK',},
    {id:3, message: 'Yes, i am good. Thanks',},
  ]
  
  let dialogsElements = dialogsData.map( dialog => { 
  return <DialogItem name={dialog.name} id={dialog.id} />} )

  let messagesElements = messageData.map( (message) => { 
    return <Message message={message.message} />
  })

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