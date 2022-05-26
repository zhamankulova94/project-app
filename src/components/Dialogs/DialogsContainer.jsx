import { connect } from 'react-redux'
import { sendMessageCreator, updateMessageBodyCreator } from '../../redux/messages-reducer'
import Dialogs from './Dialogs'


// const DialogsContainer = (props) => {
  
//  return(
//   <StoreContext.Consumer> 
//     {(store) => {
//     // <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
//       let state = store.getState()

//       let onSendMessageChange = () => { 
//         store.dispatch(sendMessageCreator())
//       }
      
//       let onNewMessageChange = (body) =>{
//         store.dispatch(updateMessageBodyCreator(body))
//       }
//         return(
//           <Dialogs 
//             updateMessageBody={onNewMessageChange} 
//             sendMessage={onSendMessageChange} 
//             dialogs={state}/>
//         )
//     }}

//   </StoreContext.Consumer>
//  )
// }
let mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesPage.dialogsData,
    messageData: state.messagesPage.messageData,
    newMessageBody: state.messagesPage.newMessageBody
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateMessageBody: (body) => {
      dispatch(updateMessageBodyCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer