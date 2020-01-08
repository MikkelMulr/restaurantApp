import React from 'react';
import { Link } from 'react-router-dom';
import './Header.style.scss';

function Header() {
	return (
		<div className='Header'>
			<Link to='/'>
				<h2>Family of Restaurants</h2>
			</Link>
			<i class='fas fa-bars' />
		</div>
	);
}

export default Header;
