import { apiClient } from '../utils/apiClient'

const fragment = 'guitars'

export async function getGuitars() {
    const response = await apiClient.get(fragment)
    return response.data
}
