import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
	BrowserRouter,
	Route,
	Switch,
//	useLocation
} from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { 
//	IntlReducer as Intl, 
	IntlProvider 
} from 'react-redux-multilingual'
import './index.scss';

// API
import { getTenantSettings } from './api/tenant';

// Import custom components
import store from './store';
import translations from './constants/translations'
import {
	getAllProducts,
	loadTenantSettings,
	getLatestPosts
} from './actions'
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
			baseHref = bases[0].getAttribute('href');
		}
		if (baseHref.endsWith("/") && baseHref.length > 1) {
			baseHref = baseHref.substring(0, baseHref.length - 1);
		}


		store.dispatch(getAllProducts());
		store.dispatch(dispatch => {
			getTenantSettings((items) => {
				dispatch(loadTenantSettings(items));
			});
		});
		store.dispatch(getLatestPosts());

		// Remove loader from the view
		setTimeout(function() {
			document.querySelector(".loader-wrapper").style = "display: none";
		}, 2000);


		return (
			<Provider store={store}>
				<IntlProvider translations={translations} locale='en'>
					<BrowserRouter basename={baseHref} >
						<ScrollContext>
							<Switch>
								<Layout>
									<Route exact path={`/`} component={home} />
									<Route path={`/shop`} component={shop} />
									<Route path={`/product/:id`} component={product} />

									{/*Routes For custom Features*/}
									<Route path={`/cart`} component={Cart} />
									<Route path={`/wishlist`} component={wishList} />
									<Route path={`/compare`} component={Compare} />
									<Route path={`/checkout`} component={checkOut} />
									<Route path={`/order-success`} component={orderSuccess} />

									{/*Routes For Extra Pages*/}
									<Route path={`/pages/about-us`} component={aboutUs} />
									<Route path={`/pages/404`} component={PageNotFound} />
									<Route path={`/pages/lookbook`} component={lookbook} />
									<Route path={`/pages/login`} component={Login} />
									<Route path={`/pages/register`} component={Register} />
									<Route path={`/pages/search`} component={Search} />
									<Route path={`/pages/collection`} component={Collection} />
									<Route path={`/pages/forget-password`} component={ForgetPassword} />
									<Route path={`/pages/contact`} component={Contact} />
									<Route path={`/pages/dashboard`} component={Dashboard} />
									<Route path={`/pages/faq`} component={Faq} />

									{/*Blog Pages*/}
									<Route path={`/blog/right-sidebar`} component={RightSide} />
									<Route path={`/blog/details`} component={Details} />
									<Route path={`/blog/blog-page`} component={BlogPage} />

									{/* <Route exact path="*" component={NoMatch} /> */}
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


