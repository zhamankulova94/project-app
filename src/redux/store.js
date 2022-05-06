import messagesReducer from "./messages-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"


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

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    // перерисовка всей страницы, обновление 
    this._callSubscriber(this._state)

  }   
}

export default store 

window.store = store