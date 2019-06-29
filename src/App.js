import React,{useState} from 'react';
import UserDisplay from './Components/UserDisplay';
import UserForm from "./Components/UserForm";

const App=()=>{

    const usersData = [
        { id: 1, name: 'Claire', username: 'Lorenzo' },
        { id: 2, name: 'Solomom', username: 'Simes' },
        { id: 3, name: 'Ben', username: 'Ashar' },
    ];

    const [users,setUsers]=  useState(usersData);

    const [isEdit,checkEdit]=useState(false);

    const initialValues={ id: "", name: "", username: ""}

    const [ currentUser, setCurrentUser ] = useState(initialValues)

    const addUser = user => {
        user.id = users.length + 1;
        setUsers([...users, user])
    };

    const deleteUser= id =>{
        setUsers(users.filter(u=> u.id !==id));
        console.log("users--", users);
    };

    const editUser = data =>{
        checkEdit(false);
        setUsers(users.map(user => (user.id === data.id ? data : user)))
    };

    const editMethod = user => {
        checkEdit(true);
        setCurrentUser({ id: user.id, name: user.name, username: user.username })
    };

    return(
        <div className={'container'}>
            <div>
                <h2 className={'mt-5 d-flex '}>CRUD with Hooks</h2>
            </div>
            <div className={'row'}>
                <div className={'col-6 d-flex justify-content-left'}>
                    <div>
                    <h3 className={'mt-3'}>Add Users</h3><hr/>
                     <UserForm addUser={addUser}
                               edited={isEdit && currentUser}
                               editUser={editUser}/>
                    </div>
                </div>
                <div className={'col-6 '}>
                    <h3 className={'mt-3 '}>View Users</h3>
                    <UserDisplay
                        users={users}
                        deleteUser={deleteUser}
                        editUser={editMethod}
                    />
                </div>
            </div>
        </div>
    )
};

export default App;
