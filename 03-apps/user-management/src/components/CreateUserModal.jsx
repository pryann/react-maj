import { useRef, useState } from 'react'
import { useUserStore } from '../contexts/userStore'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
}

const modalId = 'createUserModal'

function CreateUserModal() {
    const closeButton = useRef(null)
    const [user, setUser] = useState(initialState)
    const { createUser } = useUserStore()

    async function handleSaveClick() {
        try {
            await createUser(user)
            setUser(initialState)
            closeButton.current.click()
        } catch (error) {
            // In a real app NEVEREVER USE confirm() and alert() for user interactions, this is just for demo purposes
            alert('Error creating user: ' + error.message)
        }
    }

    function handleOnChange(event) {
        const { name, value } = event.target
        setUser((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <div className="mb-5">
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
                Create User
            </button>

            <div id={modalId} className="modal fade" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create User</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        value={user.firstName}
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        value={user.lastName}
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={user.email}
                                        onChange={handleOnChange}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                ref={closeButton}>
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleSaveClick}>
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateUserModal
