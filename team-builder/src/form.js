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

    return (
        null        //start adding form here.
    )
}