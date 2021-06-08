import {
	TENANT_SETTING_CREATE,
	TENANT_SETTING_UPDATE,
	TENANT_SETTING_DELETE
} from "../constants/ActionTypes";


const defaultState = {
	settings: {
		title: 'Test title'
	},
};

export default function tenantReducer(state = defaultState, action) {

	switch (action.type) {
		case TENANT_SETTING_UPDATE:
		case TENANT_SETTING_CREATE:
			var a = { ...state };
			action.settings.forEach(setting => {
				a.settings[setting.key] = setting.value;
			});
			return a;
		case TENANT_SETTING_DELETE:
			var a = { ...state };
			action.settings.forEach(setting => {
				delete a.settings[setting.key];
			});
			return a;
		default:
			return state;
	}
}
