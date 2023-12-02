'use client';

import { Carousel } from 'react-responsive-carousel';

const SliderImages = ({ images }) => (
	<Carousel
		axis='horizontal'
		animationHandler='fade'
		transitionTime={700}
		className='w-[300px] lg:w-[600px] overflow-hidden border'
		statusFormatter={(current, total) => `Foto ${current} de ${total}`}>
		{images
			? images.map((image, idx) => (
					<div key={idx} className='border-b border-gray-300'>
						<img src={image} alt={`imagen ${idx}`} />
					</div>
			  ))
			: null}
	</Carousel>
);

export default SliderImages;
