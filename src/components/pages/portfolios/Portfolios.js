
import React from 'react';
import Project from '../../cards/Project';
import ImgProject1 from '../../../images/SW01.PNG'
import ImgProject2 from '../../../images/SWAPI1.JPG'
// import Profile from '../profile/Profile';


export default function Portfolios () {
		return (
			<div className='container'>
					<div className='row'>
						<div className='col s12 m6'>
							<Project  redirect = '/project_reveal'image = {ImgProject1} title= 'Sugarwave' description='Frontend application leveraging ReactJs and react-material-ui tech stack'></Project>
						</div>
						<div className='col s12 m6'>
              <Project redirect='/project_reveal_swapi' image = {ImgProject2} title= 'Sugarwave' description='Backend application levereging Pythons Django, Django-Rest-Frameworks and JWT Tokens'/>
						</div>
					</div>
				</div>
		);
}

