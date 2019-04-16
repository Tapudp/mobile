import React, {Component} from 'react';
import './styles.css';

import {ReactComponent as Gamepad} from '../../assets/group-8-copy.svg';



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
				<div>Carousel 1 Carousel 2</div>
			</div>
		)
	}
}