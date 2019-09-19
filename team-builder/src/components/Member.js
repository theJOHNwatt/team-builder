import React from 'react';

const Member = props => {

    return (
        <>
            {props.members.map(info => (
                <div className='member' key={info.id}>
                    <h3>{info.name}</h3>
                    <p>{info.position}</p>
                    <p>{info.email}</p>
                </div>
            ))}
        </>
    );
};

export default Member;