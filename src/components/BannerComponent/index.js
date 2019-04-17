import React, {Component} from 'react';
import './styles.css';
import {ReactComponent as WhiteBackground} from '../../assets/group-14.svg';
import {ReactComponent as WhiteRectangle} from '../../assets/rectangle-copy-8.svg';
import {ReactComponent as Hamburger} from '../../assets/group-2.svg';
import {ReactComponent as SwooLogo} from '../../assets/Group 27.svg';
import {ReactComponent as FirstFooter} from '../../assets/group-33.svg';
import {ReactComponent as FillPlay} from '../../assets/fill-play.svg';
import {ReactComponent as Download} from '../../assets/combined-shape.svg';

export default class BannerComponent extends Component{
	constructor(props){
		super(props);

		this.state = {}
	}

	render(){
		return(
			<div className="firstscreencontainer">
        <div className="purpleheader">
          <Hamburger className="hamburger" />
          {/* <WhiteRectangle className="whiterectangle" /> */}
          <a className="downloadapp" href="https://s3.ap-southeast-1.amazonaws.com/swoo-app-releases/android/665/release/7.1.0_production_pro_release_build_app-pro-release.apk" target="_blank">Download App</a>
        </div>
        <div className="phonecontainer">
          {/* <WhiteBackground className="whitebackground" /> */}
          <SwooLogo className="swoologo"/>
          <p className="content">Play. <br/>Earn.<br/> Enjoy.</p>
          <p className="dream">
            A world of skills where you achieve your dreams.
          </p>
          <a className="downloadswoo" href="https://s3.ap-southeast-1.amazonaws.com/swoo-app-releases/android/665/release/7.1.0_production_pro_release_build_app-pro-release.apk">
            <Download/> Download Swoo
          </a>
          <br/>
          {/* <a className="watchdemo" href="#" target="_blank">
            <FillPlay/> Watch Demo
          </a> */}
          <div class="stats">
            <p className="digits">
              10M+
              <br />
              <p>Downloads</p>
            </p>
            <p className="digits">
              250k+
              <br /> 
              <p>Daily Plays</p>
            </p>
            <p className="digits">
              ₹10Cr+
              <br /> 
              <p>Total Winnings</p>
            </p>
          </div>
          {/* <FirstFooter className="firstfooter" /> */}
        </div>
        <div className="howtoplaycontainer">
          <h2><div className="star"></div>How to play<div className="star"></div></h2>
          <div class="howto">
            <p class="howtoitem1">
              Install
              <br />
              App
            </p>
            <p class="howtoitem2">
              Register
              <br /> for game
            </p>
            <p class="howtoitem3">
              Win
              <br /> & earn
            </p>
          </div>
        </div>
      </div>
		)
	}
}