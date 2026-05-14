import './App.css'
import UsersTable from './components/UsersTable'
import { UserProvider } from './contexts/userProvider'

function App() {
    return (
        <UserProvider>
            <div>
                <div className="container">
                    <h1 className="text-center">User Management App</h1>
                    <UsersTable />
                </div>
            </div>
        </UserProvider>
    )
}

export default App
