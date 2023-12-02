import ToggleFavorite from '@/components/card/toggle-favorite';
import { Icon } from '@/components/icons';
import PriceTag from '@/components/price-tag';
import { Button } from 'rsuite';

const DetailsProduct = ({ id, name, description, price, discount, categories, stock }) => (
	<article className='flex flex-col gap-3 p-5 max-w-max min-h-max lg:w-1/2'>
		<h2 className='w-full text-xl font-bold lg:text-3xl'>{name}</h2>
		<section className='flex flex-col w-full'>
			<p className='font-semibold text-md lg:text-xl'>Descripción:</p>
			<p className='w-full h-24 overflow-y-auto text-gray-400 -translate-y-2 text-md lg:text-xl'>
				{description}
			</p>
		</section>
		<section>
			<PriceTag price={price} discount={discount} xl />
			<p className='flex items-center w-full gap-3 mt-8 font-semibold text-md lg:text-xl'>
				Catálogo de:
				<p className='font-semibold text-teal-400 text-md lg:text-xl'>{categories.name}</p>
			</p>
			<p className='flex items-center w-full gap-3 mt-2 font-semibold text-md lg:text-xl'>
				Stock:
				<p className='font-semibold text-teal-400 text-md lg:text-xl'>{stock}</p>
			</p>
		</section>
		<section className='flex items-center justify-between mt-3'>
			<Button
				color='cyan'
				appearance='ghost'
				startIcon={<Icon name='ShoppingBag' size='28px' />}
				className='active:scale-95'>
				Agregar al carrito
			</Button>
			<ToggleFavorite id={id} size='40' />
		</section>
	</article>
);

export default DetailsProduct;
