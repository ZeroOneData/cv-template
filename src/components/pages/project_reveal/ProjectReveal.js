
import React from 'react';
import ProjectItem from '../../cards/ProjectItem';
import Img1 from '../../../images/SW01.PNG'
import Img2 from '../../../images/SW02.PNG'
import Img3 from '../../../images/SW03.PNG'
import Img4 from '../../../images/SW04.PNG'
import Img5 from '../../../images/SW05.PNG'
import Img6 from '../../../images/SW06.PNG'
import Img7 from '../../../images/SW07.PNG'
import Img8 from '../../../images/SW08.PNG'
import Img9 from '../../../images/SW09.PNG'
import Img10 from '../../../images/SW10.PNG'
// import Profile from '../profile/Profile';


export default function ProjectReveal () {
		return (
            <div>
			<div className='container'>
					<div className='row'>
						<div className='col s12 m12'>
							<ProjectItem  image={Img1} description='user landing page' />
						</div>
						<div className='col s12 m12'>
                            <ProjectItem  image={Img2} description='fundus image submission portal'/>
						</div>
                        <div className='col s12 m12'>
                            <ProjectItem  image={Img3} description='administrator dashboard'/>
						</div>
                        <div className='col s12 m12'>
                            <ProjectItem  image={Img4} description='dynamic list of users rendered to cards'/>
						</div>
                        <div className='col s12 m12'>
                            <ProjectItem  image={Img5} description='full CRUD operations implemented'/>
						</div>
                        <div className='col s12 m12'>
                            <ProjectItem  image={Img6} description='portal to download csv file data'/>
						</div>
                        <div className='col s12 m12'>
                            <ProjectItem  image={Img7} description='Purchasing credits for client'/>
						</div>
                        <div className='col s12 m12'>
                            <ProjectItem  image={Img8} description='Full Authorization implemented using JWT Tokens'/>
						</div>
                        <div className='col s12 m12'>
                            <ProjectItem  image={Img9} description='Error Handling/Reporting'/>
						</div>
                        <div className='col s12 m12'>
                            <ProjectItem  image={Img10} description='Live user feedback'/>
						</div>
					</div>
				</div>
            </div>
		);
}

