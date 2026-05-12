import '../assets/css/MainNavigation.css'

function MainNavigation() {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation_item">
                    <a className="navigation__link navigation__link--active" href="/">
                        React App
                    </a>
                </li>
                <li className="navigation_item">
                    <a className="navigation__link" href="https://training360.com">
                        Training 360
                    </a>
                </li>
                <li className="navigation_item">
                    <a className="navigation__link" href="https://reactjs.org">
                        React
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default MainNavigation
