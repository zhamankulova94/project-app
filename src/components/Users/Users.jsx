<<<<<<< HEAD
import * as axios from 'axios'
import React from 'react'
import cl from './Users.module.css'
import userPhoto from '../../assets/images/user-default.jpg';

const Users = (props) => {
   let getUsers = () => {
    if(props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response =>{
            props.setUsers(response.data.items)
    })
   }


}

    return (
        <div className={cl.user}>
            <button onClick={getUsers}>Get users</button>
=======
import axios from 'axios'
import React from 'react'
import cl from './Users.module.css'
import userphoto from '../../assets/images/images.jpg'

class Users extends React.Component {
    constructor (props) {
        super(props)
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(reponse => {
            this.props.setUsers(reponse.data.items)
        })
    } 
    render() {
        return (
            <div className={cl.user}>
>>>>>>> a5cb9514fe5a5d01b1ae6adad68c10c55d52decc
            {
                this.props.users.map( el => <div key={el.id}>
                    <span>
                        <div className={cl.user__ava}>
<<<<<<< HEAD
                            <img src={el.photos.small ? el.photos.small : userPhoto } />
=======
                            <img src={el.photos.small  ? el.photos.small : userphoto} />
>>>>>>> a5cb9514fe5a5d01b1ae6adad68c10c55d52decc
                        </div>
                        <div>
                            {el.followed 
                                ? <button onClick={() => {this.props.unfollow(el.id)}}>Unfollow</button> 
                                : <button onClick={() => {this.props.follow(el.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {el.name}
                            </div>
                            <div>
                                {el.status}
                            </div>
                        </span>
                        {/* <span>
                            <div>
                                {"el.location.city"}
                            </div>
                            <div>
                                {"el.location.country"}
                            </div>
                        </span> */}
                    </span>
                </div> )
            }
            </div>
        )
    }
}

export default Users
