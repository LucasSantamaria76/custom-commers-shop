import { formatPrice } from '@/lib/formatPrice';
import { cn } from '@/lib/utils';

function PriceTag({ price, discount, xl, white }) {
	return (
		<>
			<div
				className={cn('flex flex-col', {
					'bg-black p-2 rounded-md border border-white': white,
				})}>
				{discount ? (
					<>
						<p
							className={cn('text-xs', {
								'text-lg': xl,
								'text-white': white,
							})}>
							Antes: <span className='text-red-500 line-through'>{formatPrice(price)}</span>
							<span className='ml-3 text-green-500'>{`${discount} % OFF`}</span>
						</p>
						<p className={cn('text-sm', { 'text-2xl': xl, 'text-white': white })}>
							Ahora:{' '}
							<span className='text-green-500'>
								{formatPrice(price - price * (discount / 100))}
							</span>
						</p>
					</>
				) : (
					<p className={cn('text-sm', { 'text-2xl': xl, 'text-white': white })}>
						Precio: <span className='text-green-500'>{formatPrice(price)}</span>
					</p>
				)}
			</div>
		</>
	);
}
export default PriceTag;
