import { useState, useEffect } from 'react'
import * as userApi from '../apis/userApi'
import { UserContext } from './userContext'

export function UserProvider({ children }) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await userApi.getUsers()
                setUsers(response)
            } catch (error) {
                console.error('Error fetching users:', error.message)
            }
        }

        fetchUsers()
    }, [])

    const removeUser = async (id) => {
        try {
            await userApi.deleteUser(id)
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id))
        } catch (error) {
            console.error('Error deleting user:', error.message)
        }
    }

    const updateUser = async (id, updatedUserPayload) => {
        try {
            const updatedUser = await userApi.updateUser(id, updatedUserPayload)
            setUsers((prevUsers) => prevUsers.map((user) => (user.id === id ? updatedUser : user)))
        } catch (error) {
            console.error('Error updating user:', error.message)
        }
    }

    return <UserContext.Provider value={{ users, removeUser, updateUser }}>{children}</UserContext.Provider>
}
