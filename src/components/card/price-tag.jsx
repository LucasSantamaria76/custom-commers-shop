import { formatPrice } from "@/lib/formatPrice";


function PriceTag({ price, discount }) {
  return (
		<>
			<div className='flex flex-col h-10 mt-2'>
				{discount ? (
					<>
						<p className='text-xs'>
							Antes: <span className='text-red-500 line-through'>{formatPrice(price)}</span>
							<span className='ml-3 text-green-500'>{`${discount} % OFF`}</span>
						</p>
						<p>
							Ahora:{' '}
							<span className='text-green-500'>
								{formatPrice(price - price * (discount / 100))}
							</span>
						</p>
					</>
				) : (
					<p>
						Precio: <span className='text-green-500'>{formatPrice(price)}</span>
					</p>
				)}
			</div>
		</>
	);
}
export default PriceTag;
