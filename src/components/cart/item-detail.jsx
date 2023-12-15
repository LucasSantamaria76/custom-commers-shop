'use client';

import { formatPrice } from '@/lib/formatPrice';
import { useEffect, useState } from 'react';
import ButtonsSetQuantity from './buttons-set-quantity';

async function ItemDetail({ discount, id, images, name, price, quantity, stock }) {
	const [totalQuantity, setTotalQuantity] = useState(null);

	useEffect(() => {
		setTotalQuantity(quantity);
	}, []);
	return (
		<article className='grid grid-cols-12 gap-2 py-2 mt-2 mr-4 border-t border-gray-300 h-28'>
			<section className='flex items-center justify-center h-full col-span-2 overflow-hidden border border-gray-200 rounded-md'>
				<img src={images[0].url} alt='imagen producto' className='h-[80%]' />
			</section>
			<section className='col-span-4'>
				<div className='flex flex-col justify-between'>
					<h2 className='text-lg font-bold'>{name}</h2>
					<p>
						{stock - totalQuantity
							? `Unidades disponibles ${stock - totalQuantity}`
							: 'No hay unidades disponibles'}
					</p>
					{discount ? (
						<div className=''>
							<p className='inline-block mr-2'>Descuento</p>
							<p className='inline-block text-green-500'>{discount}%</p>
						</div>
					) : null}
				</div>
			</section>
			<section className='flex flex-col col-span-2'>
				<p className='font-semibold'>Precio</p>
				<p className='font-bold'>{formatPrice(price)}</p>
			</section>
			<section className='flex flex-col items-center col-span-2'>
				<p className='font-semibold'>Cantidad</p>
				<ButtonsSetQuantity totalQuantity={totalQuantity} setTotalQuantity={setTotalQuantity} />
			</section>
		</article>
	);
}
export default ItemDetail;
