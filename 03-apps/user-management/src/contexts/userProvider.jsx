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

    // the users.json store id az string, but when we create a new user, we need to generate a new id, so we need to convert the existing ids to numbers and find the max id, then add 1 to it
    // json-server  use a uniwue id generator, it will  overwrite the id we send in the request
    const generateNewId = () => {
        const maxId = users.reduce((max, user) => Math.max(max, parseInt(user.id, 10)), 0)
        return maxId + 1
    }

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

    const createUser = async (userCreatePayload) => {
        try {
            const newUserPayload = { id: generateNewId(), ...userCreatePayload }
            const createdUser = await userApi.createUser(newUserPayload)
            setUsers((prevUsers) => [...prevUsers, createdUser])
        } catch (error) {
            console.error('Error creating user:', error.message)
        }
    }

    return <UserContext.Provider value={{ users, removeUser, updateUser, createUser }}>{children}</UserContext.Provider>
}
