import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
// import ImgProject1 from '../../images/SW01.PNG'
// import ImgProject2 from '../../images/SWAPI1.jpg'

export default function Project(props) {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={props.image} alt='John Doe' />
					<Link className='btn-floating halfway-fab waves-effect waves-light red' to ={props.redirect}>
						<i className='material-icons activator'>more_vert</i>
					</Link>
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
						{props.title}
					</span>
					{/* <p>B.Sc. Computer Science</p> */}
					<p>{props.description}</p>
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
		</div>
	);
}
