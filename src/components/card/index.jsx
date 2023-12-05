import { Panel } from 'rsuite';
import PriceTag from '../price-tag';
import ToggleFavorite from './toggle-favorite';
import Link from 'next/link';
import BtnAddToCart from '../cart/btn-add-to-cart';

const Card = ({ id, name, price, discount, images }) => (
	<Panel
		shaded
		bordered
		bodyFill
		className='w-[300px] h-[460px] hover:scale-105 duration-700 overflow-hidden'>
		<article className='flex flex-col justify-between w-full h-full'>
			<img
				src={images[0]?.url}
				alt={`Imagen del producto ${name}`}
				className='h-[300px] w-[300px] object-cover'
			/>
			<section className='flex flex-col justify-between h-40 p-3 border-t border-gray-300'>
				<h2 className='text-xl font-bold'>{name}</h2>

				<PriceTag price={price} discount={discount} />
				<div className='flex items-center justify-between gap-2'>
					<Link href={`/products/${id}`} className='text-lg hover:no-underline'>
						Ver detalles
					</Link>
					<div className='flex gap-2'>
						<BtnAddToCart {...{ id, price, discount }} />
						<ToggleFavorite id={id} />
					</div>
				</div>
			</section>
		</article>
	</Panel>
);

export default Card;
