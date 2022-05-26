import React from 'react'
import cl from './Users.module.css'

const Users = (props) => {
    if(props.users.length === 0){
        props.setUsers([
            {id: 1, fullName: 'David', status: 'sometext', src: 'https://greenpower.kz/wp-content/uploads/2021/06/663328.png', location: {city: 'Taraz', country:'Kazakhstan'}, followed: true},
            {id: 2, fullName: 'Bleck', status: 'good bye', src: 'https://greenpower.kz/wp-content/uploads/2021/06/663328.png', location: {city: 'Moscow', country:'Russia'}, followed: false}
        ])
    }
    return (
        <div className={cl.user}>
            {
                props.users.map( el => <div key={el.id}>
                    <span>
                        <div className={cl.user__ava}>
                            <img src={el.src} />
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
                                {el.fullName}
                            </div>
                            <div>
                                {el.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {el.location.city}
                            </div>
                            <div>
                                {el.location.country}
                            </div>
                        </span>
                    </span>
                </div> )
            }
        </div>
    )
}

export default Users
