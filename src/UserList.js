import React from 'react';

function User( { user, onRemove, onToggle }) {
    const { username,email,id, active} = user;
    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
            }}
            onClick={() => onToggle(id)}
            >
            {username}
            </b>
            &nbsp;
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
}

function UserList({ users, onRemove, onToggle }){

    return (
        <div>
            {
                users.map(
                    (user) => (
                     <User
                     user={user}
                     key={user.id}
                     onRemove={onRemove}
                     onToggle={onToggle}
                     />) //키가 없다면 배열의 인덱스(user,index) => 이런식
                )
            }
        </div>
    )
}

export default UserList;