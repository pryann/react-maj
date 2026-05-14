import { useCartStore } from '../features/cart'

function CartButton({ guitar }) {
    const { addItemToCart } = useCartStore()

    // store  a product or product id in the cart, not the whole product, to avoid storing unnecessary data in the cart
    function handleAddToCart() {
        addItemToCart(guitar, 1)
        alert('Item added to cart')
    }

    return <>{guitar.stock > 0 && <button onClick={handleAddToCart}>Add to cart</button>}</>
}

export default CartButton
