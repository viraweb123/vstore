import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslate } from 'react-redux-multilingual'
import { connect } from 'react-redux'

class TopBar extends Component {

	render() {
		const { title, phone, translate } = this.props;
		return (
			<div className="top-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="header-contact">
								<ul>
									<li>
										{translate('topbar_title', { title: title })}
									</li>
									<li>
										<i className="fa fa-phone" aria-hidden="true"></i>
										{translate('call_us')}:  {phone}
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-6 text-right">
							<ul className="header-dropdown">
								<li className="mobile-wishlist compare-mobile">
									<Link to={`/compare`}>
										<i className="fa fa-random" aria-hidden="true"></i>
										{translate('compare')}
									</Link>
								</li>
								<li className="mobile-wishlist">
									<Link to={`/wishlist`}>
										<i className="fa fa-heart" aria-hidden="true"></i>
											{translate('wishlist')}
										</Link>
									</li>
								<li className="onhover-dropdown mobile-account">
									<i className="fa fa-user" aria-hidden="true"></i> 
									{translate('my_account')}
									<ul className="onhover-show-div">
										<li>
											<Link to={`/pages/login`} data-lng="en">
												{translate('Login')}
											</Link>
										</li>
										<li>
											<Link to={`/pages/register`} data-lng="en">
												{translate('Register')}
											</Link>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


// export default withTranslate(TopBar);


const mapStateToProps = (state, ownProps) => {
	return {
		title: state.tenant.settings['shop.title'],
		phone: state.tenant.settings['shop.phone'],
		translate: ownProps.translate
	};
}

export default connect(mapStateToProps, {})(withTranslate(TopBar));


