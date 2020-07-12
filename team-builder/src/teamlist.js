import React from 'react';

const Teamlist = props => {
    return (
        <div className='team-list'>
            {props.member.map((list, i) => (
                <div className='member' key={i}>
                    <h2>{list.name}</h2>
                    <h3>{list.email}</h3>
                    <h4>{list.role}</h4>
                </div>
            ))}
        </div>
    );
};

export default Teamlist;