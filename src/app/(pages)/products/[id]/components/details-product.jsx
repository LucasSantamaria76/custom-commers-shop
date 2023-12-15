import BtnCart from '@/components/cart/button-cart';
import ToggleFavorite from '@/components/card/toggle-favorite';
import PriceTag from '@/components/price-tag';

const DetailsProduct = ({
	id,
	name,
	description,
	sale_price,
	discount,
	categories,
	stock,
	images,
}) => (
	<article className='flex flex-col self-center gap-3 px-5 h-4/5 max-w-max lg:w-1/2'>
		<h2 className='w-full text-xl font-bold lg:text-3xl'>{name}</h2>
		<section className='flex flex-col w-full'>
			<p className='font-semibold text-md lg:text-xl'>Descripción:</p>
			<p className='w-full h-24 overflow-y-auto text-gray-400 -translate-y-2 text-md lg:text-xl'>
				{description}
			</p>
		</section>
		<section>
			<PriceTag price={sale_price} discount={discount} xl />
			<p className='flex items-center w-full gap-3 mt-8 font-semibold text-md lg:text-xl'>
				Catálogo de:
				<span className='font-semibold text-teal-400 text-md lg:text-xl'>{categories.name}</span>
			</p>
			<p className='flex items-center w-full gap-3 mt-2 font-semibold text-md lg:text-xl'>
				Stock:
				<span className='font-semibold text-teal-400 text-md lg:text-xl'>{stock}</span>
			</p>
		</section>
		<section className='flex items-center justify-between mt-3'>
			<BtnCart {...{ id, sale_price, discount, name, stock, images }} />
			<ToggleFavorite id={id} size='40' />
		</section>
	</article>
);

export default DetailsProduct;
