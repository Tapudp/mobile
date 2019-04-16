import React from 'react';
import BannerComponent from '../../components/BannerComponent';
import DiscoverComponent from '../../components/DiscoverComponent';
import TwoCarouselComponent from '../../components/TwoCarouselComponent';
import FunComponent from '../../components/FunComponent';

const Home = () => {
	return (
		<div>
			<BannerComponent/>
			<DiscoverComponent/>
			<TwoCarouselComponent/>
			<FunComponent/>
		</div>
	)
	
}

export {Home};
export default Home;