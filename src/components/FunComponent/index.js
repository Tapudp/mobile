import React, {Component} from 'react';
import './styles.css';

export default class FunComponent extends Component{
	constructor(props){
		super(props);

		this.state = {}
	}

	render(){
		return(
			<div>
				<div class="tictac">
					<h1>Don’t miss the gaming ferver!</h1>
					<p>Download SWOO on Android  and iOS</p>
					<div class="button1">
						<a href="#">Download Swoo</a>
					</div>
				</div>
				<div class="emptyspace">
					<div class="button2">Have fun together</div>
				</div>
				<div class="button3">
						<a href="#">Download Swoo</a>
				</div>
			</div>
		)
	}
}