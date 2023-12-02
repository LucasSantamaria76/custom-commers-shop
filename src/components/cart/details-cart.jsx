'use client';

import { useUserStore } from '@/stores/user';

function DetailsCart() {
	const cart = useUserStore.use.cart();

	console.log(cart);

	if (!cart.items_cart.length)
		return <p className='pt-10 text-xl text-center text-red-500'>El carrito se encuentra vacío</p>;

	return <div>DetailsCart</div>;
}
export default DetailsCart;
