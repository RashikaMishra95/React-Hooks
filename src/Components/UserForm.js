import React,{useState,useEffect} from 'react';
import {Form,FormGroup,Label,Button,Input} from 'reactstrap';

const UserForm=(props)=>{
    //const {edited}=props;
    const initialFormState = { id: null, name: '', username: '' };

    const [user, setUser] = useState(initialFormState);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUser({...user,[name]:value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!user.name || !user.username) return;
        if(Object.keys(props.edited).length){
            props.editUser(user);
        }
        else{
            props.addUser(user);
        }
        setUser(initialFormState);
    };

    useEffect(
        () => {
            if(Object.keys(props.edited).length){
                setUser(props.edited)
            }
        },
        [ props ]
    );
    return(
        <div className={'jumbotron'}>
            <Form>
                <FormGroup>
                    <Label>Name :</Label>
                    <Input type="text" name="name" id="name"
                           placeholder="Enter Name"
                            onChange={handleChange}
                           value={user.name}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>UserName :</Label>
                    <Input type="text" name="username" id="username"
                           placeholder="Enter Username"
                           onChange={handleChange}
                            value={user.username}
                    />
                </FormGroup>
                <FormGroup>
                    <Button color={'success'} onClick={handleSubmit}>Save</Button>
                </FormGroup>
            </Form>

        </div>
    )
};

export default UserForm;