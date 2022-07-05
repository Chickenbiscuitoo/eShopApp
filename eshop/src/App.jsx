import React from "react";
import {Routes, Route} from "react-router-dom"

import Header from './components/Header.jsx'
import Cards from './pages/Cards.jsx'
import Cart from './pages/Cart.jsx'

const App = () => {
	return (
    	<div>	
			<Header />
			<Routes>
				<Route exact path="/" element={<Cards />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>

    	</div>
  	);
};

export default App;
