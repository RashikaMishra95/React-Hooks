import React from 'react';
import {Table} from 'reactstrap';

const UserDisplay = props => {
     const {users,deleteUser,editUser}= props;
    return (
        <Table striped>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {
                users ?
                    users.map(u =>
                    (<tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.username}</td>
                        <td><i className="fa fa-pencil" aria-hidden="true"
                               onClick={()=>{editUser(u)}}/>&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-trash" aria-hidden="true"
                               onClick={()=>{deleteUser(u.id)}}/>
                        </td>
                    </tr>)
                )
                :
                <tr><td>No Users to display</td></tr>
            }
            </tbody>
        </Table>
    )

}
export default UserDisplay;