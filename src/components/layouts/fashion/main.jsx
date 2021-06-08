import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

// Import custom components
import TopCollection from './top-collection';
import SpecialProducts from "../common/products";
import BlogSection from "../common/blogsection";
import Instagram from "../common/instagram";
import LogoBlock from "../common/logo-block";
import {
	svgFreeShipping,
	svgservice,
	svgoffer
} from "../../../services/script"
import * as landingApi from "../../../api/landing";
import { connect } from 'react-redux'


class Fashion extends Component {

	constructor(props) {
		super(props);
		this.state = {
			slides: landingApi.getSlides(),
			mainCategories: landingApi.getMainCategories()
		};
	}

	componentDidMount() {
		document.getElementById("color").setAttribute("href", `#`);
	}

	render() {
		const {parallax} = this.props;
		
		
		return (
			<div>
				<Helmet>
					<title>MultiKart | Fashion Store</title>
					<meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
				</Helmet>
				{/*Home Slider*/}
				<section className="p-0">
					<Slider className="slide-1 home-slider">
						{this.state.slides.map(slide => {
							var slideStyle = { backgroundImage: `url(/imgx/${slide.image}?w=1920&h=718)` };
							return (
								<div>
									<div className="home home1 text-center" style={slideStyle}>
										<div className="container">
											<div className="row">
												<div className="col">
													<div className="slider-contain">
														<div>
															<h4>{slide.subtitle}</h4>
															<h1>{slide.title}</h1>
															<Link to={slide.link} className="btn btn-solid">{slide.linkTitle}</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</Slider>
				</section>
				{/*Home Section End*/}

				{/*collection banner*/}
				<section className="pb-0">
					<div className="container">
						<div className="row partition2">
							{
								this.state.mainCategories.map(cat =>
									<div className="col-md-6">
										<Link to='/shop'>
											<div className="collection-banner p-right text-center">
												<img src={'/imgx/' + cat.thumbnail + '?w=642&h=310&f=cover'} className="img-fluid" alt={cat.name} />
												<div className="contain-banner">
													<div>
														<h4>{cat.description}</h4>
														<h2>{cat.name}</h2>
													</div>
												</div>
											</div>
										</Link>
									</div>
								)
							}
						</div>
					</div>
				</section>
				{/*collection banner end*/}

				<TopCollection type={'women'} />

				{/*Parallax banner*/}
				<section className="p-0">
					<div 
						style={{
      						backgroundImage:`url("${parallax.banner}")`
						}}
						className="full-banner parallax-banner1 parallax text-center p-left">
						<div className="container">
							<div className="row">
								<div className="col">
									<div className="banner-contain">
										<h2>{parallax.title}</h2>
										<h3>{parallax.subtitle}</h3>
										<h4>{parallax.description}</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Parallax banner End*/}

				<SpecialProducts />

				{/*service layout*/}
				<div className="container">
					<section className="service border-section small-section ">
						<div className="row">
							<div className="col-md-4 service-block">
								<div className="media">
									<div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
									<div className="media-body">
										<h4>free shipping</h4>
										<p>free shipping world wide</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 service-block">
								<div className="media">
									<div dangerouslySetInnerHTML={{ __html: svgservice }} />
									<div className="media-body">
										<h4>24 X 7 service</h4>
										<p>online service for new customer</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 service-block">
								<div className="media">
									<div dangerouslySetInnerHTML={{ __html: svgoffer }} />
									<div className="media-body">
										<h4>festival offer</h4>
										<p>new online special festival offer</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				{/*Blog Section end*/}
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="title1 section-t-space">
								<h4>Recent Story</h4>
								<h2 className="title-inner1">from the blog</h2>
							</div>
						</div>
					</div>
				</div>
				<section className="blog p-t-0">
					<BlogSection />
				</section>
				{/*Blog Section End*/}

				<Instagram />

				{/*logo section*/}
				<LogoBlock />
				{/*logo section end*/}



			</div>
		)


	}
}


const mapStateToProps = (state) => {
	return {
		parallax: state.parallax[0],
	};
}

export default connect(mapStateToProps, {})(Fashion);





