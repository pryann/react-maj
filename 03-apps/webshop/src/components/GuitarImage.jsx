import { useEffect, useState } from 'react'

function GuitarImage({ title }) {
    const [image, setImage] = useState(null)

    useEffect(() => {
        async function fetchImage(imageName) {
            try {
                const response = await import(`../assets/img/guitars/${imageName}.jpg`)
                setImage(response.default)
            } catch (error) {
                console.error(`Error loading image for ${imageName}:`, error)
            }
        }

        fetchImage(title)
    })

    // create image class, instead of use a height
    return (
        <div className="guitar-list__image-container">
            <img className="guitar-list__image" src={image} alt={title} height="250" />
        </div>
    )
}

export default GuitarImage
