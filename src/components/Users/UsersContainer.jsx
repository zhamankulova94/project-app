import { connect } from 'react-redux'
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/users-reducer'
import Users from './Users'

let mapStateToProps = (state) => {
    return { 
        users: state.usersPage.usersData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
