import {
	ADD_TO_CART,
} from "../constants/ActionTypes";


const defaultState = {
	settings: {
		title: 'Test title'
	},
};

export default function cartReducer(state = defaultState, action) {
	return state;
}
