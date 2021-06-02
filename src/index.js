import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import './index.scss';

// Import custom components
import store from './store';
import translations from './constants/translations'
import { getAllProducts } from './actions'
// import Landing from './components/landing'


/*
// Layouts 

Default layouts path is './components/layouts/{name}/main'

- beauty
- common
- electronic
- fashion
- furniture
- kids
- pets
- vegetables
- watch
*/
import home from './components/layouts/fashion/main';

/**
//Collection Pages

default path ./components/collection/{name}

 */
import shop from "./components/collection/collection-left-sidebar";


// Product Pages
import product from "./components/products/left-sidebar";

// Features
import Layout from './components/app'
import Cart from './components/cart'
import Compare from './components/compare/index'
import wishList from './components/wishlist'
import checkOut from './components/checkout'
import orderSuccess from './components/checkout/success-page'

// Extra Pages
import aboutUs from './components/pages/about-us'
import PageNotFound from './components/pages/404'
import lookbook from './components/pages/lookbook'
import Login from './components/pages/login'
import Register from './components/pages/register'
import Search from './components/pages/search'
import Collection from './components/pages/collection'
import ForgetPassword from './components/pages/forget-password'
import Contact from './components/pages/contact'
import Dashboard from './components/pages/dashboard'
import Faq from './components/pages/faq'

// Blog Pages
import RightSide from './components/blogs/right-sidebar'
import Details from './components/blogs/details'
import BlogPage from './components/blogs/blog-page'



class Root extends React.Component {
	

	render() {
		// Load base href
		var bases = document.getElementsByTagName('base');
		var baseHref = '/';
		if (bases.length > 0) {
		    baseHref = bases[0].href;
		}


		store.dispatch(getAllProducts());
		
		// Remove loader from the view
		setTimeout(function() {
			document.querySelector(".loader-wrapper").style = "display: none";
		}, 2000);


		return (
			<Provider store={store}>
				<IntlProvider translations={translations} locale='en'>
					<BrowserRouter basename={ baseHref } >
						<ScrollContext>
							<Switch>
								<Route exact path={`${process.env.PUBLIC_URL}/`} component={home} />
								<Layout>
									<Route path={`${process.env.PUBLIC_URL}/shop`} component={shop} />
									<Route path={`${process.env.PUBLIC_URL}/product/:id`} component={product} />
									
									{/*Routes For custom Features*/}
									<Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart} />
									<Route path={`${process.env.PUBLIC_URL}/wishlist`} component={wishList} />
									<Route path={`${process.env.PUBLIC_URL}/compare`} component={Compare} />
									<Route path={`${process.env.PUBLIC_URL}/checkout`} component={checkOut} />
									<Route path={`${process.env.PUBLIC_URL}/order-success`} component={orderSuccess} />

									{/*Routes For Extra Pages*/}
									<Route path={`${process.env.PUBLIC_URL}/pages/about-us`} component={aboutUs} />
									<Route path={`${process.env.PUBLIC_URL}/pages/404`} component={PageNotFound} />
									<Route path={`${process.env.PUBLIC_URL}/pages/lookbook`} component={lookbook} />
									<Route path={`${process.env.PUBLIC_URL}/pages/login`} component={Login} />
									<Route path={`${process.env.PUBLIC_URL}/pages/register`} component={Register} />
									<Route path={`${process.env.PUBLIC_URL}/pages/search`} component={Search} />
									<Route path={`${process.env.PUBLIC_URL}/pages/collection`} component={Collection} />
									<Route path={`${process.env.PUBLIC_URL}/pages/forget-password`} component={ForgetPassword} />
									<Route path={`${process.env.PUBLIC_URL}/pages/contact`} component={Contact} />
									<Route path={`${process.env.PUBLIC_URL}/pages/dashboard`} component={Dashboard} />
									<Route path={`${process.env.PUBLIC_URL}/pages/faq`} component={Faq} />

									{/*Blog Pages*/}
									<Route path={`${process.env.PUBLIC_URL}/blog/right-sidebar`} component={RightSide} />
									<Route path={`${process.env.PUBLIC_URL}/blog/details`} component={Details} />
									<Route path={`${process.env.PUBLIC_URL}/blog/blog-page`} component={BlogPage} />

									{/* <Route exact path="*" component={PageNotFound} /> */}
								</Layout>
							</Switch>
						</ScrollContext>
					</BrowserRouter>
				</IntlProvider>
			</Provider>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));


