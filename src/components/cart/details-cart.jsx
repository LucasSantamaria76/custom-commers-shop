'use client';

import ItemDetail from './item-detail';
import { useUserStore } from '@/stores/user';

function DetailsCart() {
	const items = Object.values(useUserStore.use.itemsCart());

	if (!items)
		return <p className='pt-10 text-xl text-center text-red-500'>El carrito se encuentra vacío</p>;

	return (
		<article className='grid w-full h-full grid-cols-12'>
			<section className='w-full h-full col-span-8'>
				{items && items.map((item) => <ItemDetail key={item.id} {...item} />)}
			</section>
		</article>
	);
}
export default DetailsCart;
