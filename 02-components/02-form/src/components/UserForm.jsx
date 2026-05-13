import { useState } from 'react'
import InputField from './InputField'

// move const initialState and inputFields outside of the UserForm component to avoid re-creating them on every render

// use an initial state object to store the initial values of the form fields
const initialState = {
    email: '',
    firstName: '',
    lastName: '',
}

// create an array of input field configurations to avoid repeating the same code for each field
const inputFields = [
    { type: 'text', id: 'firstName', name: 'firstName', labelText: 'First name' },
    { type: 'text', id: 'lastName', name: 'lastName', labelText: 'Last name' },
    { type: 'email', id: 'email', name: 'email', labelText: 'Email address' },
]

function UserForm() {
    const [formData, setFormData] = useState(initialState)

    function handleUpdateValue(event) {
        const { name, value } = event.target
        setFormData((prevState) => ({ ...prevState, [name]: value }))
        console.log(`${name}: ${value}`)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(JSON.stringify(formData))
        setFormData(initialState)
    }

    return (
        <form onSubmit={handleSubmit}>
            {inputFields.map((field) => (
                <InputField {...field} key={field.id} value={formData[field.name]} onUpdateValue={handleUpdateValue} />
            ))}
            <button type="submit">Submit</button>
        </form>
    )

    // return (
    //     <form action="">
    //         <InputField
    //             type="text"
    //             id="firstName"
    //             name="firstName"
    //             value={formData.firstName}
    //             labelText="First name"
    //             onUpdateValue={handleUpdateValue}
    //         />
    //         <InputField
    //             type="text"
    //             id="lastName"
    //             name="lastName"
    //             value={formData.lastName}
    //             labelText="Last name"
    //             onUpdateValue={handleUpdateValue}
    //         />
    //         <InputField
    //             type="email"
    //             id="email"
    //             name="email"
    //             value={formData.email}
    //             labelText="Email address"
    //             onUpdateValue={handleUpdateValue}
    //         />
    //     </form>
    // )
}

export default UserForm
