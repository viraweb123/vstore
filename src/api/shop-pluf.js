/**
 * Mocking client-server processing
 */


//{
//		"id": 1,
//		"name": "Flare Dress",
//		"price": 120,
//		"salePrice": 200,
//		"discount": 50,
//		"pictures": [
//			"https://dummyimage.com/736x1000/cccccc/0011ff.png",
//			"https://dummyimage.com/736x1000/cccccc/0011ff.png",
//			"https://dummyimage.com/736x1000/cccccc/0011ff.png",
//			"https://dummyimage.com/736x1000/cccccc/0011ff.png"
//		],
//		"shortDetails": "Sasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
//		"description": "Lorem versions of Lorem Ipsum.",
//		"stock": 16,
//		"new": true,
//		"sale": true,
//		"category": "women",
//		"colors": [
//			"yellow",
//			"gray",
//			"green"
//		],
//		"size": [
//			"M",
//			"L",
//			"XL"
//		],
//		"tags": [
//			"nike",
//			"caprese"
//		],
//		"rating": 4,
//		"variants": [
//			{
//				"color": "yellow",
//				"images": "https://dummyimage.com/736x1000/cccccc/0011ff.png"
//			},
//			{
//				"color": "gray",
//				"images": "https://dummyimage.com/736x1000/cccccc/0011ff.png"
//			},
//			{
//				"color": "green",
//				"images": "https://dummyimage.com/736x1000/cccccc/0011ff.png"
//			}
//		]
//	},

const TIMEOUT = 100


function encodeQueryParams(params) {
	// this line takes the params object and builds the query string
	const esc = encodeURIComponent;
	return Object.keys(params).map(k => `${esc(k)}=${esc(params[k])}`).join('&')
}

function mapProducts(products) {
	return [];
}

function getProducts(cb) {
	// encode to scape spaces
	const url = '/api/v2/shop/products?';
	const params = {
		graphql: '{items{' +
			'id,title,description,brand,model,manufacturer,avatar,price,off,' +
			'categories{id, name},' +
			'metafields{id, key, namespace, product_id, unit, value},' +
			'tags{id, name}' +
			'}}',
	};


	fetch(url + encodeQueryParams(params))
		.then(response => response.json())
		.then(data => mapProducts(data.items))
		.then(products => cb(products));
}

function buyProducts(payload, cb, timeout) {
	return setTimeout(() => cb(), timeout || TIMEOUT);
}

export default {
	getProducts: getProducts,
	buyProducts: buyProducts
};

