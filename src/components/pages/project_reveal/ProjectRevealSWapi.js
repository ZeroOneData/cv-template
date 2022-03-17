
import React from 'react';
import ProjectItem from '../../cards/ProjectItem';
import Img1 from '../../../images/SWAPI1.JPG'

// import Profile from '../profile/Profile';


export default function ProjectRevealSWapi () {
		return (
            <div>
			<div className='container'>
					<div className='row'>
						<div className='col s12 m12'>
							<ProjectItem  image={Img1} description='Backend API leveraging Python Django, and Django Rest Framweorks. Full Auth capabilities via JWT tokens.' />
						</div>
					</div>
				</div>
            </div>
		);
}

