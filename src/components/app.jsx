import React, { Component } from 'react';
import {
	withTranslate
} from 'react-redux-multilingual'

// Custom Components
/**
All Headers:

- header-one
- header-two
- header-tree
 */
import Header from './common/headers/header-one';

/**
All footers:

- footer-one
- footer-two
- footer-three
 */
import Footer from "./common/footers/footer-one";

// ThemeSettings
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
