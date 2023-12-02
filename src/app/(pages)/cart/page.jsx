import DetailsCart from '@/components/cart/details-cart';
import { Icon } from '@/components/icons';

function pageCart() {
	return (
		<article className='w-full h-full p-5 bg-teal-100'>
			<section className='flex items-center justify-center gap-2'>
				<Icon name='ShoppingBag' size='48px' />
				<h2 className='text-4xl font-bold'>Mi carrito de compras</h2>
			</section>
			<DetailsCart />
		</article>
	);
}
export default pageCart;
