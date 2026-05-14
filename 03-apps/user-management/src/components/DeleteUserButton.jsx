import { useUserStore } from '../contexts/userStore'

function DeleteUserButton({ userId }) {
    const { removeUser } = useUserStore()

    function handleDeleteClick(id) {
        // In a real app NEVEREVER USE confirm() and alert() for user interactions, this is just for demo purposes
        try {
            const confirmDelete = confirm('Are you sure you want to delete this user?')
            if (confirmDelete) {
                removeUser(id)
            }
        } catch (error) {
            alert('Error deleting user: ' + error.message)
        }
    }

    return (
        <button className="btn btn-danger me-3" onClick={() => handleDeleteClick(userId)}>
            Delete
        </button>
    )
}

export default DeleteUserButton
