import React from 'react';

const Teamlist = props => {
    return (
        <div className='team-list'>
            {props.member.map((list, i) => (
                <div className='member' key={i}>
                    <p>{list.name}</p>
                    <p>{list.email}</p>
                    <p>{list.role}</p>
                </div>
            ))}
        </div>
    );
};

export default Teamlist;