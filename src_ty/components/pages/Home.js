import React, { Component } from 'react';
import Navbar from '../Navbar';
import Profile from './profile/Profile';
import About from './about/About';
import Skills from './skills/Skills';
import Experiences from './experiences/Experiences';
import Educations from './educations/Educations';
import Portfolios from './portfolios/Portfolios'

export default class Home extends Component {
	render() {
		return (
			<section>
				<Navbar />
				<div className='container'>
					<div className='row'>
						<div className='col s12 m3'>
							<Profile />
						</div>
						<div className='col s12 m9'>
							<About />
							<Skills />
							<Experiences />
							<Educations />
							<Portfolios />
						</div>
					</div>
				</div>
			</section>
		);
	}
}
