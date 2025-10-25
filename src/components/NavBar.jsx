import { Link } from 'react-router-dom'

export default function NavBar() {
	return (
		<header className="site-header">
			<nav className="nav container">
				<Link to="/" className="logo" aria-label="Home">
					Zendec
				</Link>
				<ul className="nav-links">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
