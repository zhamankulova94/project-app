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
            {
                this.props.users.map( el => <div key={el.id}>
                    <span>
                        <div className={cl.user__ava}>
                            <img src={el.photos.small  ? el.photos.small : userphoto} />
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
                                {el.location.city}
                            </div>
                            <div>
                                {el.location.country}
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
