import { apiClient } from '../utils/apiClient'

const urlFragment = 'users'

// Newer get all eleements, it can be a huge amount of data
// In a real app, we would want to add pagination, filtering, and sorting to this endpoint
export async function getUsers() {
    const response = await apiClient.get(urlFragment)
    return response.data
}

export async function updateUser(id, userUpdatePayload) {
    const response = await apiClient.put(`${urlFragment}/${id}`, userUpdatePayload)
    return response.data
}

export async function createUser() {}

export async function deleteUser(id) {
    await apiClient.delete(`${urlFragment}/${id}`)
}
