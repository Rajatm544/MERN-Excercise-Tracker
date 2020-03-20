import React, {Component} from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {

	render() {
		return(
			<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
				<Link to="/" className="navbar-brand"> ExCerTrack</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    			<span className="navbar-toggler-icon"></span>
  				</button>

				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className="navbar-item">
							<Link to="/" className="nav-link"> Excercises </Link>
						</li>
						<li className="navbar-item">
							<Link to="/create" className="nav-link"> Create Excercise Log </Link>
						</li>
						<li className="navbar-item">
							<Link to="/user" className="nav-link"> Create User </Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	};
}

export default Navbar;