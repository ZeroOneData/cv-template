import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgDegree from '../../../images/JPG-BSC-01.jpg';
import ImgDegree2 from '../../../images/JPG-BSC-02.jpg';

export default function Details() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgDegree} alt='John Doe' />
					{/* <Link className='btn-floating halfway-fab waves-effect waves-light red'>
						<i className='material-icons activator'>more_vert</i>
					</Link> */}
				</div>				
				{/* <div className='card-reveal'>
					<span className='card-title grey-text text-darken-4'>
						Follow Me
						<i className='material-icons right'>close</i>
					</span>
					<p className='flex-container'>
						<i className='fab fa-facebook-f grey-text text-darken-4 social_style'></i>
						<i className='fab fa-twitter grey-text text-darken-4 social_style'></i>
						<i className='fab fa-google-plus-g grey-text text-darken-4 social_style'></i>
						<i className='fab fa-instagram grey-text text-darken-4 social_style'></i>
						<i className='fab fa-pinterest grey-text text-darken-4 social_style'></i>
					</p>
				</div> */}
			</div>
            <div className='card'>
                <div className='card-image'>
					<img className='activator' src={ImgDegree2} alt='John Doe' />
					<Link className='btn-floating halfway-fab waves-effect waves-light red'>
						<i className='material-icons activator'>more_vert</i>
					</Link>
				</div>
			</div>
		</div>
	);
}
