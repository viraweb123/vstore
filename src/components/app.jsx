import React, { Component } from 'react';
import {
	withTranslate
} from 'react-redux-multilingual'

import Header from '@vstore-header';
import Footer from '@vstore-footer';
// import ThemeSettings from "./common/theme-settings"



class App extends Component {

	render() {
		return (
			<div>
				<Header logoName={'logo.png'} />
				{this.props.children}
				<Footer logoName={'logo.png'} />
			</div>
		);
	}
}

/*
Translate the application
 */
export default withTranslate(App);
