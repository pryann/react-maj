import { useReducer } from 'react'
import { cartReducer } from './cartReducer'
import { ACTIONS } from './cartActions'
import { CartContext } from './CartContext'

export function CartProvider({ children }) {
    const initialState = []

    const [cart, dispatch] = useReducer(cartReducer, initialState)

    const addItemToCart = (item, count) => {
        dispatch({ type: ACTIONS.ADD_ITEM_TO_CART, payload: { item, count } })
    }

    const changeItemCount = (id, count) => {
        dispatch({ type: ACTIONS.CHANGE_ITEM_COUNT, payload: { id, count } })
    }

    const removeItemFromCart = (id) => {
        dispatch({ type: ACTIONS.REMOVE_ITEM_FROM_CART, payload: { id } })
    }

    const totalCount = cart.reduce((prev, curr) => prev + curr.count, 0)

    const totalPrice = cart.reduce((prev, curr) => prev + curr.count * curr.price, 0)

    return (
        <CartContext.Provider
            value={{ cart, addItemToCart, changeItemCount, removeItemFromCart, totalCount, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}
