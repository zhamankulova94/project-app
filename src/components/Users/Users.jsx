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
            {
                props.users.map( el => <div key={el.id}>
                    <span>
                        <div className={cl.user__ava}>
                            <img src={el.photos.small ? el.photos.small : userPhoto } />
                        </div>
                        <div>
                            {el.followed 
                                ? <button onClick={() => {props.unfollow(el.id)}}>Unfollow</button> 
                                : <button onClick={() => {props.follow(el.id)}}>Follow</button>}
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
                        <span>
                            <div>
                                {"el.location.city"}
                            </div>
                            <div>
                                {"el.location.country"}
                            </div>
                        </span>
                    </span>
                </div> )
            }
        </div>
    )
}

export default Users
