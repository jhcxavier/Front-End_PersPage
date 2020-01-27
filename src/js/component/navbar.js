import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/JH_Logo.png";
import "../../styles/index.scss";

export const Navbar = () => {
	return (
		<div>
			<img className="logo" src={logo} />
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Projects</span>
				</Link>
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Skills</span>
				</Link>
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Articles</span>
				</Link>
				<Link to="/">
					<span className="navbar-brand mb-0 h1">About me</span>
				</Link>
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Contact</span>
				</Link>
			</nav>
		</div>
	);
};
