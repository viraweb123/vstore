

export function getSlides() {
	return [{
		title: 'men fashion',
		subtitle: 'welcome to fashion',
		link: '/shop',
		linkTitle: 'shop now',
		image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
	}, {
		title: 'women fashion',
		subtitle: 'welcome to fashion',
		link: '/shop',
		linkTitle: 'shop now',
		image: 'https://images.ctfassets.net/hrltx12pl8hq/oZL5bg7l1t7ZvXxpe6OBe/337244daf1cb2f4420806a40aee81df1/shutterstock_image__9_-min.jpg?fit=fill&w=800&h=300'
	}];
};

export function getMainCategories() {
	// REST: GET: /api/v2/shop/categories?_px_fk=parent_id&_px_fv=0
	return [{
		id: 87,
		name: 'الأعلام الدينية',
		thumbnail: "/api/v2/cms/contents/5472/content"
	},
	{
		id: 375,
		description: "يافطات دينية حسب المناسبات اﻹسلامية",
		name: "الیافطات",
		thumbnail: "/api/v2/cms/contents/7159/content"
	}, {
		id: 84,
		description: "الملابس الدينية",
		name: "ملابس",
		thumbnail: "/api/v2/cms/contents/5469/content"
	}];
};