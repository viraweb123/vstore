
import {toBoolean} from '../services/util'

//{
//		"category": "women",
//		"tags": [
//			"nike",
//			"caprese"
//		],
//	},


// {"items":[{"id":183,"title":"Product 1","description":"The md-chips component supports keyboard and screen reader users since Version 1.1.2. In order to achieve this, we modified the chips behavior to select newly appended chips for 300ms before re-focusing the input and allowing the user to type.","brand":"IT Man","model":"Original","manufacturer":"DPQ","avatar":"\/api\/v2\/cms\/contents\/12944\/content","price":1000,"off":157,"categories":[{"id":447,"name":"name"},{"id":449,"name":"test"},{"id":453,"name":"my new category"}],"metafields":[{"id":264,"key":"variant","namespace":"std","product_id":183,"unit":null,"value":"[{\"key\":\"a\",\"image\":\"\/api\/v2\/cms\/contents\/14072\/content\",\"color\":\"blue\",\"size\":\"L\"},{\"image\":\"\/api\/v2\/cms\/contents\/14071\/content\",\"color\":\"yellow\"},{\"image\":\"\/api\/v2\/cms\/contents\/14070\/content\",\"size\":\"S\"}]"},{"id":265,"key":"image","namespace":"theme","product_id":183,"unit":"testd","value":"\/api\/v2\/cms\/contents\/14073\/content"},{"id":267,"key":"color","namespace":"theme","product_id":183,"unit":null,"value":"red"},{"id":268,"key":"size","namespace":"theme","product_id":183,"unit":"mm","value":"M"},{"id":270,"key":"vstore.stock","namespace":"theme","product_id":183,"unit":null,"value":"10"},{"id":271,"key":"vstore.sale","namespace":"theme","product_id":183,"unit":null,"value":"true"},{"id":272,"key":"vstore.new","namespace":"theme","product_id":183,"unit":null,"value":"true"},{"id":273,"key":"rating","namespace":"commiunity","product_id":183,"unit":null,"value":"2"}],"tags":[]}]}

const TIMEOUT = 100


function encodeQueryParams(params) {
	// this line takes the params object and builds the query string
	const esc = encodeURIComponent;
	return Object.keys(params).map(k => `${esc(k)}=${esc(params[k])}`).join('&')
}

function getProductMetaField(product, key, namespace) {
	var metas = product.metafields;
	var found;
	metas.forEach(meta => {
		if (meta.key === key && (!namespace || meta.namespace === namespace)) {
			found = meta;
		}
	});
	if (found) {
		return found.value;
	}
}

function getFirstCategoryName(categories){
	if((!categories || !Array.isArray(categories) || categories.length < 1)){
		return 'empty';
	}
	return categories[0].name;
}

export function aggregateObjectField(list, key) {
	var result = [];
	list.forEach(item => {
		if (item[key]) {
			result.push(item[key]);
		}
	});
	return result;
}

function mapProducts(products) {
	products.forEach(product => {
		product.name = product.title;
		product.shortDetails = product.description;
		product.salePrice = product.price - (product.off || 0);
		product.discount = (product.off || 0) * 100 / product.price;

		let variant = JSON.parse(getProductMetaField(product, 'variant') || '[]');
		product.variants = variant;
		product.pictures = aggregateObjectField(variant, 'image');
		product.colors = aggregateObjectField(variant, 'color');
		product.size = aggregateObjectField(variant, 'size');
		product.stock = getProductMetaField(product, 'vstore.stock', 'theme') || 0;
		product.new = toBoolean(getProductMetaField(product, 'vstore.new', 'theme'));
		product.sale = toBoolean(getProductMetaField(product, 'vstore.sale', 'theme'));
		product.rating = getProductMetaField(product, 'rating', 'community') || 0;
		product.tags = aggregateObjectField(product.tags, 'name');
		product.category = getFirstCategoryName(product.categories);

		variant.forEach(item => {
			item.images = item.image;
		});
	});
	return products;
}

function getProducts(cb, timeout) {
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

