import { IntlActions } from 'react-redux-multilingual';
import store from '../store';


export function changeLanguage(lang) {
	store.dispatch(IntlActions.setLocale(lang))
}
