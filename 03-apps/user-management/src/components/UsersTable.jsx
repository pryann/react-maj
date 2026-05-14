// import { useContext } from 'react'
// import { UserContext } from '../contexts/userContext'

import { useUserStore } from '../contexts/userStore'
import DeleteUserButton from './DeleteuserButton'

function UsersTable() {
    // const { users } = useContext(UserContext)
    const { users } = useUserStore()

    return (
        <table className="table table-striped table-fixed">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <th>
                            <DeleteUserButton userId={user.id} />
                            <button className="btn btn-primary">Edit</button>
                        </th>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UsersTable
