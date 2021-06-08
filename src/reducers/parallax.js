/**
Parallax Store

All parallex sections in whole application are stored in a list. It is used in all part of 
the application.

For example in the main page the first one is used in the page.

Load your data and set into the parallax store to update state of the application

 */

//import {
//	TENANT_SETTING_CREATE,
//	TENANT_SETTING_UPDATE,
//	TENANT_SETTING_DELETE
//} from "../constants/ActionTypes";


const defaultState = [{
	banner: '/api/v2/cms/contents/39030/content',
	title: '2021',
	subtitle: 'fashion trends',
	description: 'special offer'
}];


export default function reducer(state = defaultState, action) {

	switch (action.type) {
		default:
			return state;
	}
}
