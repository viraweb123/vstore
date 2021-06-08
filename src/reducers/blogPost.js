/**
Blog Posts

Lates post form the blog will be stored in the list.

Just load and update the store to show new list of blogs.

 */

//import {
//	TENANT_SETTING_CREATE,
//	TENANT_SETTING_UPDATE,
//	TENANT_SETTING_DELETE
//} from "../constants/ActionTypes";


const defaultState = [{
	link: '/blog/details',
	cover: 'https://dummyimage.com/1000x591/cccccc/0011ff.png',
	date: '25 January 2018',
	description: 'Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit,',
	title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
	author: 'John Dio , 2 Comment'
}, {
	link: '/blog/details',
	cover: 'https://dummyimage.com/1000x591/cccccc/0011ff.png',
	date: '25 January 2018',
	description: 'Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit,',
	title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
	author: 'John Dio , 2 Comment'
}, {
	link: '/blog/details',
	cover: 'https://dummyimage.com/1000x591/cccccc/0011ff.png',
	date: '25 January 2018',
	description: 'Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit,',
	title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
	author: 'John Dio , 2 Comment'
}, {
	link: '/blog/details',
	cover: 'https://dummyimage.com/1000x591/cccccc/0011ff.png',
	date: '25 January 2018',
	description: 'Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit,',
	title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
	author: 'John Dio , 2 Comment'
}, {
	link: '/blog/details',
	cover: 'https://dummyimage.com/1000x591/cccccc/0011ff.png',
	date: '25 January 2018',
	description: 'Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit,',
	title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
	author: 'John Dio , 2 Comment'
}, {
	link: '/blog/details',
	cover: 'https://dummyimage.com/1000x591/cccccc/0011ff.png',
	date: '25 January 2018',
	description: 'Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit,',
	title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
	author: 'John Dio , 2 Comment'
}, {
	link: '/blog/details',
	cover: 'https://dummyimage.com/1000x591/cccccc/0011ff.png',
	date: '25 January 2018',
	description: 'Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit,Lorem ipsum dolor sit consectetur adipiscing elit,',
	title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
	author: 'John Dio , 2 Comment'
}];

export default function reducer(state = defaultState, action) {

	switch (action.type) {
		default:
			return state;
	}
}
