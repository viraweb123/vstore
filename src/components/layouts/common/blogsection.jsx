import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import { Slider3 } from "../../../services/script"
import { connect } from 'react-redux'

class BlogSection extends Component {
	render() {
		const { posts } = this.props;
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<Slider {...Slider3} className="slide-3 no-arrow ">
							{posts.map(post => 
								<div>
									<div className="col-md-12">
										<Link to={post.link} >
											<div className="classic-effect">
												<img
													src={post.cover}
													className="img-fluid"
													alt={post.title} />
												<span></span>
											</div>
										</Link>
										<div className="blog-details">
											<h4>{post.date}</h4>
											<Link
												to={post.link} >
												<p>{post.title}</p>
											</Link>
											<hr className="style1" />
											<h6>By: {post.author}</h6>
										</div>
									</div>
								</div>
							)}
						</Slider>
					</div>
				</div>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		posts: state.blogPosts,
	};
}

export default connect(mapStateToProps, {})(BlogSection);


