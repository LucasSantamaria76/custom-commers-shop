import { formatPrice } from '@/lib/formatPrice';
import { cn } from '@/lib/utils';

function PriceTag({ price, discount, xl }) {
	return (
		<>
			<div className='flex flex-col'>
				{discount ? (
					<>
						<p
							className={cn('text-xs', {
								'text-lg': xl,
							})}>
							Antes: <span className='text-red-500 line-through'>{formatPrice(price)}</span>
							<span className='ml-3 text-green-500'>{`${discount} % OFF`}</span>
						</p>
						<p className={cn('text-sm', { 'text-2xl': xl })}>
							Ahora:{' '}
							<span className='text-green-500'>
								{formatPrice(price - price * (discount / 100))}
							</span>
						</p>
					</>
				) : (
					<p className={cn('text-sm', { 'text-2xl': xl })}>
						Precio: <span className='text-green-500'>{formatPrice(price)}</span>
					</p>
				)}
			</div>
		</>
	);
}
export default PriceTag;
