import { useContext } from 'react'
import { CartContext } from './CartContext'

export const useCartStore = () => {
    return useContext(CartContext)
}
