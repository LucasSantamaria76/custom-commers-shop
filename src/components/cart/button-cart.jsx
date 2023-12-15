'use client';

import { useUserStore } from '@/stores/user';
import { Icon } from '../icons';
import { Button } from 'rsuite';

function BtnCart({ id, sale_price, discount, name, stock, images }) {
	const user = useUserStore.use.id();
	const addToCart = useUserStore.use.addToCart();
	return (
		<Button
			color='cyan'
			appearance='ghost'
			startIcon={<Icon name='ShoppingBag' size='28px' />}
			className='active:scale-95'
			onClick={user && (() => addToCart({ id, sale_price, discount, name, stock, images }))}>
			Agregar al carrito
		</Button>
	);
}
export default BtnCart;
