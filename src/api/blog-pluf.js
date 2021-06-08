
function encodeQueryParams(params) {
	// this line takes the params object and builds the query string
	const esc = encodeURIComponent;
	return Object.keys(params).map(k => `${esc(k)}=${esc(params[k])}`).join('&')
}

function mapPosts(posts) {
	posts.forEach(post => {
		post.name = product.title;
		post.shortDetails = product.description;
		post.salePrice = product.price - (product.off || 0);
		post.discount = Math.round((product.off || 0) * 100 / product.price * 100) / 100;

		let variant = JSON.parse(getProductMetaField(product, 'variant') || '[]');
		variant.unshift(metafieldToMap(product));
		post.variants = variant;
	});
	return posts;
}

function getPosts(callback, timeout) {
	// encode to scape spaces
	const url = '/api/v2/cms/contents?';
	const params = {
		_px_fk: 'media_type',
		_px_fv: 'post',
		graphql: '{items{'+
			'id,name,title,description,creation_dtime,modif_dtime,author{login},metas{key,value},' +
			'term_taxonomies{taxonomy,count,term{name}}' +
			+ '}}',
	};


	fetch(url + encodeQueryParams(params))
		.then(response => response.json())
		.then(data => mapPosts(data.items))
		.then(posts => callback(posts));
}


export default {
	getPosts: getPosts
};

