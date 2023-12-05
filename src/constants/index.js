//tables
export const PRODUCTS = 'products';
export const CATEGORIES = 'categories';
export const FAVORITES = 'favorites';
export const PROFILES = 'profiles';
export const PROVIDERS = 'providers';
export const CARTS = 'carts';
export const ITEMS_CART = 'items_cart';

//modals
export const AUTH_MODAL = 'auth_modal';

export const selectColumns = {
	[PRODUCTS]: '*, images(id,url), categories(name)',
	[CATEGORIES]: '*',
	[FAVORITES]: '*',
	[PROFILES]: '*,favorites(product_id),carts(*,items_cart(*))',
	[PROVIDERS]: '*',
	[CARTS]: '*,items_cart(*)',
	[ITEMS_CART]: '*',
};

export const errorDB = {
	'Invalid login credentials': 'Credenciales de acceso invalidos',
	'Email rate limit exceeded': 'Error al registrar, intente mas tarde',
	'Email not confirmed': 'Correo electrónico sin confirmar',
	'Database error saving new user': 'Error al guardar nuevo usuario',
};
