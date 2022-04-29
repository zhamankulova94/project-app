const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
  _callSubscriber() {
    console.log('state is  changed')
  },
  _state: {
    profilePage: {
      postData: [
        {id: 1, message: 'Hello, how are you', likesCount: 15},
        {id: 2, message: 'Where have you been?', likesCount: 22},
        {id: 3, message: 'Bye Bye', likesCount: 2},
      ],
      newPostText: 'hello'
    },
    messagesPage: {
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
    },
    sidebar: [
      {name: 'Alex', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png'},
      {name: 'Max', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png'},
      {name: 'Jack', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png'}
    ]
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    if(action.type === ADD_POST) {
        let text = {
          id: 4,
          message: this._state.profilePage.newPostText,
          likesCount: 0
        }
        this._state.profilePage.postData.push(text)
        this._state.profilePage.newPostText = ''
        // перерисовка всей страницы, обновление 
        this._callSubscriber(this._state)
    } else if(action.type === UPDATE_NEW_POST_TEXT) {
        this._state.profilePage.newPostText = action.newText
        this._callSubscriber(this._state)
    } else if(action.type === UPDATE_NEW_MESSAGE_BODY) {
        // изменить state
        this._state.messagesPage.newMessageBody = action.body
        // сообщить внешнему миру что state изменился
        this._callSubscriber(this._state)
    } else if(action.type === SEND_MESSAGE) {
        let addMessage = {
          id: 4,
          message: this._state.messagesPage.newMessageBody
        }
        this._state.messagesPage.messageData.push(addMessage)
        this._state.messagesPage.newMessageBody = ''
        this._callSubscriber(this._state)
    }
  }   
}
 
export const addPostActionCreator = () => ({type: ADD_POST} )
export const updatePostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText : text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default store 

window.store = store