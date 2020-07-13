import React, { useState } from 'react';

const Form = props => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const handleName = event => setName(event.target.value);
    const handleEmail = event => setEmail(event.target.value);
    const handleRole = event => setRole(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        if (name && email && role) {
            props.setMember([...props.member, { name, email, role }]);
            resetState();

        }
    };

    const resetState = () => {
        setName('')
        setEmail('')
        setRole('')
    };

    return (
        
        <form onSubmit={handleSubmit}>Team Member Input:
            <input
                onChange={handleName}
                type='text'
                name='name'
                value={name}
                placeholder='Name:'
            />
            <input
                onChange={handleEmail}
                type='text'
                name='email'
                value={email}
                placeholder='Email:'
            />
            <input
                onChange={handleRole}
                type='text'
                name='role'
                value={role}
                placeholder='Role - '
            />
            <button type='submit'>Add Member</button>
        </form>
    
    )
}

export default Form;