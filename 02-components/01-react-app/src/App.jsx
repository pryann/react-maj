import './App.css'
import InputField from './components/InputField'
import MainNavigation from './components/MainNavigation'
import SiteContent from './components/SiteContent'
import SiteFooter from './components/SiteFooter'

function App() {
    function handleFocus() {
        console.log('Input focused')
    }

    function handleFocusMod() {
        console.log('Input focused, modified')
    }

    return (
        <>
            <MainNavigation title="App" />
            <SiteContent>
                <InputField handleFocus={handleFocus} />
                <InputField handleFocus={handleFocusMod} />
            </SiteContent>
            <SiteFooter />
        </>
    )
}

export default App
