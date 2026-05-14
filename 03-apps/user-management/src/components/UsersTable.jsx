// import { useContext } from 'react'
// import { UserContext } from '../contexts/userContext'

import { useState } from 'react'
import { useUserStore } from '../contexts/userStore'
import DeleteUserButton from './DeleteuserButton'
import EditUserModal from './EditUserModal'

function UsersTable() {
    // const { users } = useContext(UserContext)
    const { users } = useUserStore()
    const [selectedUser, setSelectedUser] = useState(null)

    return (
        <div>
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
                                <button
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editUserModal"
                                    onClick={() => setSelectedUser(user)}>
                                    Edit
                                </button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
            <EditUserModal user={selectedUser} onSelectUser={setSelectedUser} />
        </div>
    )
}

export default UsersTable
