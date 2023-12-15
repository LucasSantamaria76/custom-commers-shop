'use client';

import { useState } from 'react';
import { Thumbnails } from './thumbnails';

export function ViewImages({ images }) {
	const [imageIndex, setImageIndex] = useState(0);
	return (
		<div className='flex self-center w-1/2 gap-2 h-4/5'>
			<div className='w-32 overflow-y-auto'>
				<Thumbnails images={images} imageIndex={imageIndex} setImageIndex={setImageIndex} />
			</div>
			<div className='flex-1 border border-black rounded-md'>
				<img
					src={images[imageIndex]}
					alt={`Imagen del producto`}
					className='object-contain w-full h-full'
				/>
			</div>
		</div>
	);
}
