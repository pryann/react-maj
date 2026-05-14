function OpenEditUserModalButton({ user, onSelectUser }) {
    return (
        <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#editUserModal"
            onClick={() => onSelectUser(user)}>
            Edit
        </button>
    )
}

export default OpenEditUserModalButton
