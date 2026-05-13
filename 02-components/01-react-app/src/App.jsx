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

    function handleInput(value) {
        console.log('Input value:', value)
    }

    return (
        <>
            <MainNavigation title="App" />
            <SiteContent>
                <InputField handleFocus={handleFocus} handleInput={handleInput} />
                <InputField handleFocus={handleFocusMod} handleInput={handleInput} />
            </SiteContent>
            <SiteFooter />
        </>
    )
}

export default App
