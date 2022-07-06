import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar(props) {
	return (
		<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">Text Utils</Link>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about">About</Link>
						</li>
					</ul>
					{/*<form className="d-flex" role="search">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-primary" type="submit">Search</button>
					</form> */}
					<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
						<input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
						<label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==='light'?'dark':'light'} mode`}</label>
					</div>
				</div>
			</div>
		</nav>
	)
}
