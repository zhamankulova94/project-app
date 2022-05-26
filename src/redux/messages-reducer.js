const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogsData: [
        {
          id: 1, 
          name: 'Alex', 
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png'
        },
        {
          id: 2, 
          name: 'Max', 
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png'
        },
        {
          id: 3, 
          name: 'Alice', 
          src: 'https://greenpower.kz/wp-content/uploads/2021/06/663328.png'
        },
        {
          id: 4, 
          name: 'Kate', 
          src: 'https://greenpower.kz/wp-content/uploads/2021/06/663328.png'
        },
        {
          id: 5, 
          name: 'Jack', 
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png'
        },
        {
          id: 6, 
          name: 'Sabrina', 
          src: 'https://greenpower.kz/wp-content/uploads/2021/06/663328.png'
        },
      ],
      messageData: [
        {id: 1, message: 'Hi',},
        {id: 2, message: 'Are you OK',},
        {id: 3, message: 'Yes, i am good. Thanks',},
      ],
      newMessageBody: 'hi there'
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            return {
              ...state,
              newMessageBody: action.body
            };
        case SEND_MESSAGE:        
            return {
              ...state,
              messageData: [...state.messageData, {id: 4, message: state.newMessageBody}],
              newMessageBody: ''
            };
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default messagesReducer