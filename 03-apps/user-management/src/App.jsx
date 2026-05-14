import './App.css'
import CreateUserModal from './components/CreateUserModal'
import UsersTable from './components/UsersTable'
import { UserProvider } from './contexts/userProvider'

function App() {
    return (
        <UserProvider>
            <div>
                <div className="container">
                    <h1 className="text-center mb-3 p-5">User Management App</h1>
                    <CreateUserModal />
                    <UsersTable />
                </div>
            </div>
        </UserProvider>
    )
}

export default App
