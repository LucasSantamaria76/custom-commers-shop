//tables
export const PRODUCTS = 'products';
export const FAVORITES = 'favorites';

//modals
export const AUTH_MODAL = 'auth_modal';

export const selectColumns = {
	products: '*, images(id,url), categories(name)',
	categories: '*',
	favorites: '*',
	profiles: '*',
	providers: '*',
};
