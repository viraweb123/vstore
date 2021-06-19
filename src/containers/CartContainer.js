import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartPage from '../components/common/headers/common/cart-header'
import { removeFromCart } from '../actions'
import { getCartTotal } from '../services'


import CartLinkImage from '../assets/images/icon/cart.png';

const CartContainer = ({ cartList, total, symbol, removeFromCart }) => (
	<li className="onhover-div mobile-cart">
		<div className="cart-qty-cls">{cartList.length}</div>
		<Link to={`/cart`}>
			<img 
				src={CartLinkImage} 
				className="img-fluid" 
				alt="" />
			<i className="fa fa-shopping-cart"></i></Link>
		<ul className="show-div shopping-cart">
			{cartList.map((item, index) => (
				<CartPage 
					key={index} 
					item={item} 
					total={total} 
					symbol={symbol} 
					removeFromCart={() => removeFromCart(item)} />
			))}
			{(cartList.length > 0) ?
				<div>
					<li>
						<div className="total">
							<h5>subtotal : <span>{symbol}{total}</span></h5>
						</div>
					</li>
					<li>
						<div className="buttons">
							<Link to={`/cart`} className="view-cart">view cart</Link>
							<Link to={`/checkout`} className="checkout">checkout</Link>
						</div>
					</li></div>
				:
				<li><h5>Your cart is currently empty.</h5></li>}
		</ul>

	</li>
)


function mapStateToProps(state) {
	return {
		cartList: state.cartList.cart,
		total: getCartTotal(state.cartList.cart),
		symbol: state.data.symbol,
	}
}

export default connect(mapStateToProps, { removeFromCart })(CartContainer);
