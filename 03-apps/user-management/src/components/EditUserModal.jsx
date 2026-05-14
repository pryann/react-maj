import 'bootstrap/js/dist/modal'
import { useUserStore } from '../contexts/userStore'
import { useRef } from 'react'

function EditUserModal({ user, onSelectUser }) {
    const closeButton = useRef(null)
    const { updateUser } = useUserStore()

    async function handleSaveClick() {
        try {
            await updateUser(user.id, user)
            closeButton.current.click()
        } catch (error) {
            // In a real app NEVEREVER USE confirm() and alert() for user interactions, this is just for demo purposes
            alert('Error updating user: ' + error.message)
        }
    }

    function handleOnChange(event) {
        const { name, value } = event.target
        onSelectUser((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <div id="editUserModal" className="modal fade" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit User</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                    value={user?.firstName || ''}
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
                                    value={user?.lastName || ''}
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
                                    value={user?.email || ''}
                                    onChange={handleOnChange}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeButton}>
                            Close
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleSaveClick}>
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUserModal
