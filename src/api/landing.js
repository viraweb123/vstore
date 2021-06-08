

export function getSlides() {
	return [{
		title: 'men fashion',
		subtitle: 'welcome to fashion',
		link: '/shop',
		linkTitle: 'shop now',
		image: '/api/v2/cms/contents/39026/content'
	}, {
		title: 'women fashion',
		subtitle: 'welcome to fashion',
		link: '/shop',
		linkTitle: 'shop now',
		image: '/api/v2/cms/contents/39027/content'
	}];
};

export function getMainCategories() {
	// REST: GET: /api/v2/shop/categories?_px_fk=parent_id&_px_fv=0
	return [{
		id: 87,
		name: 'Men',
		thumbnail: '/api/v2/cms/contents/39028/content'
	},
	{
		id: 375,
		name: "Women",
		thumbnail: '/api/v2/cms/contents/39029/content'
	}];
};