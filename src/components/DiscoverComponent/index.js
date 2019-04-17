import React, {Component} from 'react';
import './styles.css';

import Carousel from 'nuka-carousel';


import {ReactComponent as Gamepad} from '../../assets/group-8-copy.svg';
import {ReactComponent as Group4} from '../../assets/Mobile BG.svg';
import {ReactComponent as AquaTheif} from '../../assets/Games/Aquatheif.svg';
import {ReactComponent as CricketGunda} from '../../assets/Games/CricketGunda.svg';
import {ReactComponent as FallingThrough} from '../../assets/Games/Fallingthrough.svg';
import {ReactComponent as JuicyDash} from '../../assets/Games/Juicydash.svg';
import {ReactComponent as MelonPinch} from '../../assets/Games/MelonPinch.svg';
import {ReactComponent as PiratesPillage} from '../../assets/Games/Piratespillage.svg';
import {ReactComponent as QuackHunt} from '../../assets/Games/Quackhunt.svg';
import {ReactComponent as Rafting} from '../../assets/Games/Rafting.svg';
import {ReactComponent as RocketMan} from '../../assets/Games/RocketMan.svg';
import {ReactComponent as StickyGoo} from '../../assets/Games/StickyGoo.svg';
import {ReactComponent as TerraInfirma} from '../../assets/Games/Terrainfirma.svg';
import {ReactComponent as TicTacToe} from '../../assets/Games/TicTacToe.svg';
import {ReactComponent as TimeWarp} from '../../assets/Games/TimeWarp.svg';
import {ReactComponent as ZoopinBall} from '../../assets/Games/Zoopinball.svg';

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
					speed={500}
					cellSpacing={1}
					dragging={true}
					slidesToShow={1.3}
					withoutControls={true}
					>
						<AquaTheif/>
						<CricketGunda/>
						<FallingThrough/>
						<JuicyDash/>
						<MelonPinch/>
						<PiratesPillage/>
						<QuackHunt/>
						<Rafting/>
						<RocketMan/>
						<StickyGoo/>
						<TerraInfirma/>
						<TicTacToe/>
						<TimeWarp/>
						<ZoopinBall/>
					</Carousel>
				</div>
			</div>
		)
	}
}