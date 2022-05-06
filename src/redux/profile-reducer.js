const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

let initialState = {
    postData: [
        {id: 1, message: 'Hello, how are you', likesCount: 15},
        {id: 2, message: 'Where have you been?', likesCount: 22},
        {id: 3, message: 'Bye Bye', likesCount: 2},
    ],
    newPostText: 'hello'
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            let text = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            }
            state.postData.push(text)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} )
export const updatePostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText : text})

export default profileReducer