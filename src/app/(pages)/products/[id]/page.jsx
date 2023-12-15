import { getDbTableByColumn } from '@/actions';
import SliderImages from '@/components/slider-images';
import { PRODUCTS } from '@/constants';
import DetailsProduct from './components/details-product';
import { Icon } from '@/components/icons';
import Link from 'next/link';
import { ViewImages } from './components/view-images';

async function pageProductID({ params }) {
	const { data: product, error } = await getDbTableByColumn(PRODUCTS, 'id', params.id, true);

	return (
		<article className='relative flex items-center justify-center h-[calc(100vh-105px)] w-full mt-14'>
			<Link href='/products' className='text-lg hover:no-underline'>
				<Icon name='ArrowLeftSquare' className='absolute top-10 left-5' size='32px' />
			</Link>
			<section className='flex flex-col justify-center w-full h-full gap-3 lg:flex-row'>
				{/* <SliderImages images={product.images} /> */}
				<ViewImages images={product.images} />
				<DetailsProduct {...product} />
			</section>
		</article>
	);
}
export default pageProductID;
