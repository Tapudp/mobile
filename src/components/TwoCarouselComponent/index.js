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
				<Carousel
					cellSpacing={5}
					dragging={true}
					slidesToShow={1}
					withoutControls={false}
					renderCenterLeftControls={({previousSlide}) => (
						<PathBack onClick={previousSlide}/>
					)}
					renderCenterRightControls={({nextSlide}) => (
						<PathForward onClick={nextSlide} />
					)}
				>
					<Group26/>
				</Carousel>

				<div className="commentshead">
					<div className="oval"></div>
					<p className="folks">What folks are saying</p>
					<div className="commentsection">
						<Carousel
							cellSpacing={5}
							dragging={true}
							slidesToShow={1}
							withoutControls={false}
						>
							<Comment/>
						</Carousel>
					</div>
				</div>
			</div>
		)
	}
}