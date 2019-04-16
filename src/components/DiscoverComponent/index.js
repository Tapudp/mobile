import React, {Component} from 'react';
import './styles.css';
import Slider from 'react-slick';

import {ReactComponent as Gamepad} from '../../assets/group-8-copy.svg';



export default class DiscoverComponent extends Component{
	constructor(props){
		super(props);

		this.state = {}
	}

	render(){
		var settings={
			dots: true,
			arrows: true,
			infinite: true,
			speed: 500,
		}
		return(
			<div className="discover">
				<div className="gamepad">
					<Gamepad/>
				</div>

				<p className="newgame">Discover <br/>New games</p>
				<p className="friends">Play popular games with friends & Use your skills to Win Big!</p>
				<div className="carousel1">

				</div>
				<div className="carousel2">
					<Slider {...settings}>
						<div>
							<h1>Divyesh</h1>
						</div>
						<div>
							<h1>Parmar</h1>
						</div>
						<div>
							<h1>Swoo</h1>
						</div>
					</Slider>
				</div>
			</div>
		)
	}
}