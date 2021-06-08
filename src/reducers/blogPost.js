/**
Blog Posts

Latest post from the blog will be stored in the list.

Just load and update the store to show new list of blog posts.

 */

import {
	RECEIVE_POSTS
} from "../constants/ActionTypes";


const initialState = [];

export default function reducer(state = initialState, action) {

	switch (action.type) {
		case RECEIVE_POSTS:
			return action.posts;
		default:
			return state;
	}
}
