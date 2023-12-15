import { cn } from '@/lib/utils';

export function Thumbnails({ images, imageIndex, setImageIndex }) {
	return (
		<div className='flex flex-col items-center w-full gap-3'>
			{images.map((image, idx) => (
				<div
					key={idx}
					onClick={() => setImageIndex(idx)}
					className={cn(
						'w-4/5 overflow-hidden border border-black rounded-md cursor-pointer hover:border-cyan-500',
						{
							'border-2 border-cyan-500': imageIndex === idx,
						}
					)}>
					<img src={image} alt='imagen producto' className='object-contain' />
				</div>
			))}
		</div>
	);
}
