import React, {Component} from 'react';
import './styles.css';
import {ReactComponent as Download} from '../../assets/combined-shape.svg';


export default class FunComponent extends Component{
	constructor(props){
		super(props);

		this.state = {}
	}

	render(){
		return(
			<div>
				<div class="tictac">
					<h1 className="motto">Don’t miss the gaming fever!</h1>
					<p>Download SWOO on Android  and iOS</p>
					<div>
						<a className="button1" href="#">Download Swoo</a>
					</div>
				</div>
				<div class="emptyspace">
					<div class="button2">Have fun together</div>
				</div>
				<a className="downloadswoobottom" href="#">
            	<Download/> Download Swoo
 				</a>
				<div className="purplefooter"></div>
			</div>
		)
	}
}