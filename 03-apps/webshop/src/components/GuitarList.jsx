import { useEffect } from 'react'
import { useState } from 'react'
import { getGuitars } from '../apis/guitarsApi'
import GuitarImage from './GuitarImage'
import CartButton from './CartButton'

function GuitarList() {
    const [guitars, setGuitars] = useState([])

    useEffect(() => {
        const fetchGuitars = async () => {
            const response = await getGuitars()
            setGuitars(response)
        }

        fetchGuitars()
    }, [])

    // not the best way to load images, but it works for this example
    // alway gnereate the image name from the title, so we can load it dynamically
    // do not use not url frendly chars for the image name
    // separate all guitar detail to a component
    // add max count to the cart, so we can not add more than the stock
    // remove from cart if count is 0, so we can not have items with 0 count in the cart
    // .... a lot of things to improve, but this is just a simple example to show how to use the cart store and how to load images dynamically

    return (
        <div className="guitar-list">
            <div className="guitar-list__item">
                {guitars.map((guitar) => (
                    <div key={guitar.id}>
                        <GuitarImage title={guitar.title} />
                        <div className="guitar-list__details" key={guitar.id}>
                            <h2>{guitar.title}</h2>
                            <p>{guitar.description}</p>
                            <p>{guitar.price}</p>
                            <p>{guitar.stock}</p>
                            <p>{guitar.rating}</p>
                            <CartButton guitar={guitar} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GuitarList
