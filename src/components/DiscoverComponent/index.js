import React, {Component} from 'react';
import './styles.css';

import Carousel from 'nuka-carousel';


import {ReactComponent as Gamepad} from '../../assets/group-8-copy.svg';
import {ReactComponent as Group4} from '../../assets/Mobile BG.svg';
import {ReactComponent as Group27} from '../../assets/Group 27.svg';





export default class DiscoverComponent extends Component{
	constructor(props){
		super(props);

		this.state = {}
	}

	render(){
		return(
			<div className="discover">
				<div className="gamepad">
					<Gamepad/>
				</div>

				<p className="newgame">Discover <br/>New games</p>
				<p className="friends">Play popular games with friends & Use your skills to Win Big!</p>
				
				<div className="carousel2">
					<Carousel
					cellSpacing={5}
					dragging={true}
					slidesToShow={1.5}
					withoutControls={true}
					>
							<img src="../../assets/group.jpg"/>
							<Group4/>
							<Group27/>
					</Carousel>
				</div>
			</div>
		)
	}
}