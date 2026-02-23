import React from 'react';
import User from './User.jsx';

function List(props) {
    return (
        <div className='container'>
            <div className="row">
                <h3>
                    Component list
                </h3>
            </div>
            <div className="row">
                {props.users.map((userInfo,index)=>{
                    return <User key ={index}
                    index={index}
                    user={userInfo.user}
                    skills={userInfo.skills}
                    order={userInfo.order}
                    >

                    </User>
                })}
            </div>
        </div>
    );
}

export default List;