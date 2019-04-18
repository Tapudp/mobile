import React, {Component} from 'react';
import './styles.css';

import Carousel from 'nuka-carousel';

import {ReactComponent as Group26} from '../../assets/group-26.svg';
import {ReactComponent as PathBack} from '../../assets/path-7.svg';
import {ReactComponent as PathForward} from '../../assets/path-7-copy.svg';
import {ReactComponent as Comment} from '../../assets/group-3.svg';



export default class TwoCarouselComponent extends Component{
	constructor(props){
		super(props);

		this.state = {}
	}

	render() {
		return(
			<div className="container">
		
				<div className="carousel1">
					<Carousel
						cellSpacing={3}
						dragging={true}
						slidesToShow={1}
						withoutControls={false}
						renderCenterLeftControls={({previousSlide}) => (
							<PathBack onClick={previousSlide}/>
							)}
							renderCenterRightControls={({nextSlide}) => (
								<PathForward onClick={nextSlide} />
								)}
						renderBottomCenterControls={false}
						>
						<Group26/>
				</Carousel>
				</div>

				{/* <div className="commentshead">
					<div className="oval"></div>
					<p className="folks">What folks are saying</p>
					<div className="commentsection">
						<Carousel
							cellSpacing={1}
							dragging={true}
							slidesToShow={1}
							withoutControls={false}
							renderCenterLeftControls={false}
							renderCenterRightControls={false}							
						>
							<Comment/>
							<Comment/>
							<Comment/>
						</Carousel>
					</div>
				</div> */}

			</div>
		)
	}
}