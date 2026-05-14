import { Link } from 'react-router-dom'

function MainNavigation() {
    return (
        <nav className="main-navigation">
            <ul className="main-navigation__list">
                <li className="main-navigation__item">
                    <Link className="main-navigation__link" to="/">
                        Shop
                    </Link>
                </li>
                <li className="main-navigation__item">
                    <Link className="main-navigation__link" to="/cart">
                        Cart (0)
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainNavigation
