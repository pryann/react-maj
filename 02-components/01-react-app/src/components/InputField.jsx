import { useState } from 'react'

function InputField({ handleFocus, handleInput }) {
    const [value, setValue] = useState('')

    function handleInnerInput(event) {
        const newValue = event.target.value
        setValue(newValue)
        handleInput(newValue)
    }

    return <input type="text" value={value} onFocus={handleFocus} onInput={handleInnerInput} />
}

export default InputField
