import reducer from "./tenant";
import { loadTenantSettings } from "../actions/index";

it('setting is created', () => {
	var mySetting = [{
		key: 'title',
		value: 'tenant title'
	},
	{
		key: 'description',
		value: 'tenant description'
	}];
	var state = { settings: {} };

	expect(reducer(state, loadTenantSettings(mySetting))).toEqual({
		settings: {
			title: 'tenant title',
			description: 'tenant description'
		}
	});
})