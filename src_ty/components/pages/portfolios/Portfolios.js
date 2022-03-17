
import React from 'react';
import Profile from '../profile/Profile';
import About from '../about/About';
import Skills from '../skills/Skills';
import Experiences from '../experiences/Experiences';
import Educations from '../educations/Educations';

export default function Portfolios () {
		return (
			<div>
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
			</div>
		);
}

