import { getDbTableById } from '@/actions';
import SliderImages from '@/components/slider-images';
import { PRODUCTS } from '@/constants';
import DetailsProduct from './details-product';
import { Icon } from '@/components/icons';
import Link from 'next/link';

async function pageProductID({ params }) {
	const { data: product, error } = await getDbTableById(PRODUCTS, params.id);

	const images = product.images.map((image) => image.url);

	return (
		<div className='relative flex items-center justify-center h-full'>
			<Link href='/products' className='text-lg hover:no-underline'>
				<Icon name='ArrowLeftSquare' className='absolute top-5 left-5' size='48px' />
			</Link>
			<div className='flex flex-col justify-center w-3/4 gap-3 lg:flex-row'>
				<SliderImages images={images} />
				<DetailsProduct {...product} />
			</div>
		</div>
	);
}
export default pageProductID;
