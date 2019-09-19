import React, {useState} from 'react';

const MemberForm = props => {
    console.log(props);
    const [member, setMember] = useState({name: '',position: '',email: ''})

    const handleChanges = e => {
        setMember({...member, [e.target.name]:e.target.value});
        console.log(member);
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({name: '',position: '',email: ''});
    }


    return ( 
        <form onSubmit={submitForm}>
            <lable htmlFor='name'>Name</lable>
            <input
            type='text'
            name='name'
            onChange={handleChanges}
            value={member.name}
            placeholder='First and Last Name'
            />
            <lable htmlFor='positon'>Position</lable>
            <input 
            type='text'
            name='position'
            placeholder='Current Position'
            onChange={handleChanges}
            value={member.position}
            />
            <lable htmlFor='email'>Email</lable>
            <input 
            type='text'
            name='email'
            placeholder='johndoe@gmail.com'
            onChange={handleChanges}
            value={member.email}
            />
            <button type='submit'>Add Member</button>
        </form>
        
    )
};

export default MemberForm;