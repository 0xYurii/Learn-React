

export default function Header() {
    return (
        <header className="header">
            <img src="src/react-1.svg"  alt="React logo" className="img" />
            <nav>
                <ul className="nav-list">
                    <li className="li">Pricing</li>
                    <li className="li">About</li>
                    <li className="li">Contact</li>
                </ul>
            </nav>
        </header>
    )
}