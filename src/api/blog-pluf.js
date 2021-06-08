
function encodeQueryParams(params) {
	// this line takes the params object and builds the query string
	const esc = encodeURIComponent;
	return Object.keys(params).map(k => `${esc(k)}=${esc(params[k])}`).join('&')
}

function getPostMeta(post, key) {
	var metas = post.metas;
	var found;
	for(var i=0; i<metas.length; i++){
		if(metas[i].key === key){
			found = metas[i];
			break;
		}
	}
	if (found) {
		return found.value;
	}
}

function mapPosts(posts) {
	posts.forEach(post => {
		// link, cover, date, description, title, author
		post.author = post.author.login;
		post.date = post.creation_dtime;
		post.cover = getPostMeta(post, 'link.cover');
		post.link = getPostMeta(post, 'link.canonical');
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
			'}}',
	};


	fetch(url + encodeQueryParams(params))
		.then(response => response.json())
		.then(data => mapPosts(data.items))
		.then(posts => callback(posts));
}


export default {
	getPosts: getPosts
};

