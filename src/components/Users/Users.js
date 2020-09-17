import React from "react";
import classes from './Users.module.css';

let Users = (props) => {
    if(props.users.length ===0){
        props.setUsers([
            {id:1 , photoUrl: 'https://img.afisha.tut.by/static/media/340x0s/people/0f/b/dmitriy-nagiev-027054.jpg', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
            {id:2 , photoUrl: 'https://img.afisha.tut.by/static/media/340x0s/people/0f/b/dmitriy-nagiev-027054.jpg', followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
            {id:3 , photoUrl: 'https://img.afisha.tut.by/static/media/340x0s/people/0f/b/dmitriy-nagiev-027054.jpg', followed: false, fullName: 'Dmitry', status: 'I am a boss too too', location: {city: 'Kiev', country: 'Ukraine'}},

        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={classes.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                         </div>
                </span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span><div>{u.location.country}</div>
                <div>{u.location.city}</div></span>
            </div>)
        }
    </div>
}

export default Users;