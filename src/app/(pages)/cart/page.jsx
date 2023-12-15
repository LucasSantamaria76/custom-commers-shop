import DetailsCart from '@/components/cart/details-cart';
import { Icon } from '@/components/icons';

async function pageCart() {
	return (
		<article className='flex flex-col w-full h-full'>
			<section className='fixed flex items-end justify-center w-full h-32 gap-2 pb-4 bg-white shadow-md'>
				<Icon name='ShoppingBag' size='40px' />
				<h2 className='text-3xl font-bold'>Mi carrito de compras</h2>
			</section>
			<section className='flex flex-col h-full mt-[140px] pl-5'>
				<DetailsCart />
			</section>
		</article>
	);
}
export default pageCart;
