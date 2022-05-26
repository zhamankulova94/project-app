const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
    usersData: [
        // {id: 1, fullName: 'David', status: 'sometext', src: 'https://greenpower.kz/wp-content/uploads/2021/06/663328.png', location: {city: 'Taraz', country:'Kazakhstan'}, followed: true},
        // {id: 2, fullName: 'Bleck', status: 'good bye', src: 'https://greenpower.kz/wp-content/uploads/2021/06/663328.png', location: {city: 'Moscow', country:'Russia'}, followed: false}
    ]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: 
            return {
                ...state,
                usersData: state.usersData.map( user => {
                    if(user.id === action.userId){
                        return {...user, followed: true}
                    } 
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: false}
                    } 
                      return user
                })
            }
        case SET_USERS: 
            return {
                ...state,
                usersData: [...state.usersData, ...action.users]
            }
        default: 
            return state;
    }

}

export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})

export default usersReducer