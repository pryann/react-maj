import { useState } from 'react'
import InputField from './InputField'

// move const initialState and inputFields outside of the UserForm component to avoid re-creating them on every render

// use an initial state object to store the initial values of the form fields
const initialState = {
    billingTypeIsCompany: false,
    billingName: '',
    billingCountry: '',
    billingZipCode: '',
    billingCity: '',
    billingAddress: '',
    billingTaxNumber: '',
}

// create an array of input field configurations to avoid repeating the same code for each field
const inputFields = [
    { type: 'checkbox', id: 'billingTypeIsCompany', name: 'billingTypeIsCompany', labelText: 'Is company?' },
    { type: 'text', id: 'billingName', name: 'billingName', labelText: 'Billing name' },
    { type: 'text', id: 'billingCountry', name: 'billingCountry', labelText: 'Billing country' },
    { type: 'text', id: 'billingZipCode', name: 'billingZipCode', labelText: 'Billing zip code' },
    { type: 'text', id: 'billingCity', name: 'billingCity', labelText: 'Billing city' },
    { type: 'text', id: 'billingAddress', name: 'billingAddress', labelText: 'Billing address' },
    // { type: 'text', id: 'billingTaxNumber', name: 'billingTaxNumber', labelText: 'Billing tax number' },
]

function BillingAddressForm() {
    const [formData, setFormData] = useState(initialState)

    function handleUpdateValue(event) {
        const { name, value, checked, type } = event.target
        const newValue = type === 'checkbox' ? checked : value
        setFormData((prevState) => ({ ...prevState, [name]: newValue }))
        console.log(`${name}: ${newValue}`)
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
            {formData.billingTypeIsCompany && (
                <InputField
                    type="text"
                    id="billingTaxNumber"
                    name="billingTaxNumber"
                    value={formData.billingTaxNumber}
                    labelText="Billing tax number"
                    onUpdateValue={handleUpdateValue}
                />
            )}
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

export default BillingAddressForm
