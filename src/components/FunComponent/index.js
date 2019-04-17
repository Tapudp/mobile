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
				<div className="tictac">
					<h1 className="motto">Don’t miss the gaming fever!</h1>
					<div className="text">
						<p>Download SWOO on Android  and iOS</p>
						<a className="button1" href="https://s3.ap-southeast-1.amazonaws.com/swoo-app-releases/android/665/release/7.1.0_production_pro_release_build_app-pro-release.apk">Download Swoo</a>
					</div>
				</div>
				<div class="emptyspace">
					<div class="button2">Have fun together</div>
				</div>
				<a className="downloadswoobottom" href="https://s3.ap-southeast-1.amazonaws.com/swoo-app-releases/android/665/release/7.1.0_production_pro_release_build_app-pro-release.apk">
            	<Download/> Download Swoo
 				</a>
				<div className="purplefooter"></div>
			</div>
		)
	}
}