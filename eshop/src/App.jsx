import React from "react";
import {Routes, Route, Link} from "react-router-dom"

import Cards from './pages/Cards.jsx'
import Cart from './pages/Cart.jsx'

const App = () => {
	return (
    	<div>
			<header>
				<Link to='/'>
					<h1>"Real" Shop</h1>
				</Link>
				<Link to='/cart'>
					<i className={'ri-shopping-cart-line ri-fw ri-2x'}></i>
				</Link>
			</header>

			<Routes>
				<Route exact path="/" element={<Cards />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>

    	</div>
  	);
};

export default App;
