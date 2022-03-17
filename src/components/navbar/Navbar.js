import React, { Component } from 'react';
//import 'materialize-css/dist/css/materialize.min.css';
import { HashLink as Link } from 'react-router-hash-link';

export default class Navbar extends Component {
	render() {
		return (
			<>
				<nav className='light-blue darken-4'>
					<div className='container'>
						<div className='nav-wrapper'>
							<Link to='/' className='brand-logo'>
								SOFTWARE ENGINEER
							</Link>
							<Link to='/' data-target='side-nav' className='sidenav-trigger'>
								<i className='material-icons'>menu</i>
							</Link>
							<ul className='right hide-on-med-and-down'>
								<li>
									<Link to='/'>
										<i class='fas fa-home'></i> Home
									</Link>
								</li>
								<li>
									<Link to='/skills'>
										<i class='fas fa-copy'></i> Skills
									</Link>
								</li>
								<li>
									<Link to='/experiences'>
										<i class='fas fa-id-badge'></i> Experience
									</Link>
								</li>
								<li>
									<Link to='/educations'>
										<i class='fas fa-graduation-cap'></i> Education
									</Link>
								</li>
								<li>
									<Link to='/portfolios'>
										<i class='fas fa-address-card'></i> Portfolio
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<ul className='sidenav' id='side-nav'>
					<li>
						<Link to='/' className="sidenav-close">
							<i class='fas fa-home'></i> Home
						</Link>
					</li>
					<li>
						<Link to='/skills' className="sidenav-close">
							<i class='fas fa-copy'></i> Skills
						</Link>
					</li>
					<li>
						<Link to='/experiences' className="sidenav-close">
							<i class='fas fa-id-badge'></i> Experience
						</Link>
					</li>
					<li>
						<Link to='/educations' className="sidenav-close">
							<i class='fas fa-graduation-cap'></i> Education
						</Link>
					</li>
					<li>
						<Link to='/portfolios' className="sidenav-close">
							<i class='fas fa-address-card'></i> Portfolio
						</Link>
					</li>
				</ul>
			</>
		);
	}
}
