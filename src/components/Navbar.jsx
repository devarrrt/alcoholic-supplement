import React from 'react'
import { Link } from 'react-router-dom'



export const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<Link to="/" className="logo">
					Ещё по одной
				</Link>

				<ul className="nav-links">
					<li> 
					<Link to="/"> Домой меня </Link>	
					</li>
					<li>  
						<Link to="/about" > О нас </Link>
					</li>
				</ul>

			</div>
		</nav>
	)
}
