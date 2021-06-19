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
	var a;
	switch (action.type) {
		case TENANT_SETTING_UPDATE:
		case TENANT_SETTING_CREATE:
			a = { ...state };
			action.settings.forEach(setting => {
				a.settings[setting.key] = setting.value;
			});
			break;
		case TENANT_SETTING_DELETE:
			a = { ...state };
			action.settings.forEach(setting => {
				delete a.settings[setting.key];
			});
			break;
		default:
			return state;
	}
	return a;
}
