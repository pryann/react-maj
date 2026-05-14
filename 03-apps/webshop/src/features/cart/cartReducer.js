import { ACTIONS } from './cartActions'

export const cartReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_ITEM_TO_CART:
            return [...state, { ...action.payload.item, count: action.payload.count }]
        case ACTIONS.CHANGE_ITEM_COUNT:
            return state.map((item) =>
                item.id === action.payload.id ? { ...item, count: action.payload.count } : item,
            )
        case ACTIONS.REMOVE_ITEM_FROM_CART:
            return state.filter((item) => item.id !== action.payload.id)
        default:
            return state
    }
}
