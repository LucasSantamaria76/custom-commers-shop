'use client';

import { useUserStore } from '@/stores/user';
import { Icon } from '../icons';
import { cn } from '@/lib/utils';
import { Badge } from 'rsuite';

function BtnAddToCart({ id, price, discount }) {
	const user = useUserStore.use.id();
	const quantity = useUserStore.use.itemsCart()[id];
	const addToCart = useUserStore.use.addToCart();

	return (
		<div className='has-tooltip'>
			<span
				className={cn(
					'tooltip min-w-max rounded -translate-x-32 shadow-lg p-1 bg-teal-50 border border-teal-500 -mt-10',
					{
						'-mt-16 bg-red-50  border-red-500': !user,
					}
				)}>
				<div className='flex flex-col items-center'>
					{!user && <p>Iniciar sesión para </p>}
					<p className='m-1'>
						<i className='font-bold'>Agregar al carrito </i>
					</p>
				</div>
			</span>
			<div className='relative'>
				<Badge
					content={quantity}
					className={cn('absolute -left-1 -top-2 flex rounded-full bg-cyan-500', {
						hidden: !quantity,
					})}
				/>
				<Icon
					name='ShoppingBag'
					className='cursor-pointer'
					size='26px'
					onClick={user && (() => addToCart({ id, price, discount }))}
				/>
			</div>
		</div>
	);
}
export default BtnAddToCart;
