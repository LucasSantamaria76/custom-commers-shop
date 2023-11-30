//tables
export const PRODUCTS = 'products';
export const FAVORITES = 'favorites';

//modals
export const AUTH_MODAL = 'auth_modal';

export const selectColumns = {
	products: '*, images(id,url), categories(name)',
	categories: '*',
	favorites: '*',
	profiles: '*,favorites(product_id)',
	providers: '*',
};

export const errorDB = {
	'Invalid login credentials': 'Credenciales de acceso invalidos',
	'Email rate limit exceeded': 'Error al registrar, intente mas tarde',
	'Email not confirmed': 'Correo electrónico sin confirmar',
};
