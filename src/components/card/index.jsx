import { Panel } from 'rsuite';
import PriceTag from '../price-tag';
import ToggleFavorite from './toggle-favorite';
import Link from 'next/link';
import BtnAddToCart from '../cart/btn-add-to-cart';

const Card = ({ id, name, sale_price, discount, stock, images }) => (
	<Panel
		shaded
		bordered
		bodyFill
		className='group w-[300px] h-[300px] overflow-hidden shadow-[1px_1px_4px_2px_rgba(0,0,0,0.3)]'>
		<article className='relative w-full h-full'>
			<img
				src={images[0]}
				alt={`Imagen del producto ${name}`}
				className='h-[300px] w-[300px] object-cover'
			/>
			<section className='absolute top-0 left-0 flex flex-col w-full h-full gap-5 p-3 duration-1000 translate-y-full border-t border-gray-300 group-hover:translate-y-0 bg-black/60'>
				<h2 className='text-xl font-bold text-white'>{name}</h2>

				<PriceTag price={sale_price} discount={discount} white />
				<div className='flex items-center justify-between gap-2'>
					<Link href={`/products/${id}`} className='text-lg text-white hover:no-underline'>
						Ver detalles
					</Link>
					<div className='absolute flex gap-2 bottom-4 right-4'>
						<BtnAddToCart {...{ id, sale_price, discount, name, stock, images }} color={'white'} />
						<ToggleFavorite id={id} color='white' />
					</div>
				</div>
			</section>
		</article>
	</Panel>
);

export default Card;
