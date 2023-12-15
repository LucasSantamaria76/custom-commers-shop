//tables
export const PRODUCTS = 'products';
export const CATEGORIES = 'categories';
export const PROFILES = 'profiles';
export const PROVIDERS = 'providers';
export const CARTS = 'carts';
export const CART_ITEMS = 'cart_items';

//modals
export const AUTH_MODAL = 'auth_modal';

// select column DB
export const selectColumns = {
	[PRODUCTS]: '*, categories(name)',
	[CATEGORIES]: '*',
	[PROFILES]:
		'*,carts(*),cart_items(quantity,product_id,products(name,discount,stock,sale_price,images))',
	[PROVIDERS]: '*',
	[CARTS]: '*,cart_items(*)',
	[CART_ITEMS]: '*,products(discount, id, name, sale_price, stock,images)',
};

export const errorDB = {
	'Invalid login credentials': 'Credenciales de acceso invalidos',
	'Email rate limit exceeded': 'Error al registrar, intente mas tarde',
	'Email not confirmed': 'Correo electrónico sin confirmar',
	'Database error saving new user': 'Error al guardar nuevo usuario',
};
