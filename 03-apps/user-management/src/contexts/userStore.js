import { useContext } from 'react'
import { UserContext } from './userContext'

export function useUserStore() {
    return useContext(UserContext)
}
