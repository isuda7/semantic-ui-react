import React from 'react';
import { Outlet } from 'react-router-dom';
import { BannerNotice, MainHeader, MainFooter } from '../components';
import './style.scss';

const LayoutMain = () => {
	return (
		<div className='main_wrapper'>
			<BannerNotice />
			<MainHeader />
			<Outlet />
			<MainFooter />
		</div>
	);
}
export default LayoutMain; 