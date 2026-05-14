import { useEffect } from 'react'
import { useState } from 'react'
import { getGuitars } from '../apis/guitarsApi'

function GuitarList() {
    const [guitars, setGuitars] = useState([])

    useEffect(() => {
        const fetchGuitars = async () => {
            const response = await getGuitars()
            setGuitars(response)
        }

        fetchGuitars()
    }, [])

    return (
        <div className="guitar-list">
            <div className="guitar-list__item">
                <div className="guitar-list__image-container">
                    <img className="guitar-list__image" src="" alt="" />
                </div>
                {guitars.map((guitar) => (
                    <div className="guitar-list__details" key={guitar.id}>
                        <h2>{guitar.title}</h2>
                        <p>{guitar.description}</p>
                        <p>{guitar.price}</p>
                        <p>{guitar.stock}</p>
                        <p>{guitar.rating}</p>
                        <button>Cart button</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GuitarList
