import React from 'react';
import pete from './Purdue-Pete.jpg'
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
Logo,
} from './navbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/'>
			<Logo src={pete}>
			</Logo>
		</NavLink>
		<NavLink to='/board' activeStyle className={'HoverLink'}>
			Leaderboard
		</NavLink>
		<NavLink to='/competitions' activeStyle className={'HoverLink'}>
			Competitions
		</NavLink>
		<NavLink to='/recommendations' activeStyle className={'HoverLink'}>
			Recommendations
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/login'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
