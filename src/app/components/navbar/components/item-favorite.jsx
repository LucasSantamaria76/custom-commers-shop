import NavLink from '@/components/nav-link';
import Image from 'next/image';
import { Dropdown } from 'rsuite';

function ItemFavorite({ id, name, images, stock }) {
	return (
		<>
			<Dropdown.Item
				as={NavLink}
				className='flex items-center gap-2 px-5 py-1 min-w-max'
				href={`/products/${id}`}>
				<div className='flex items-center gap-5 px-2 py-1'>
					<Image width={64} height={64} src={images[0].url} alt={`imagen de ${name}`} />
					<div className='flex flex-col'>
						<p className='text-lg'>{name}</p>
						<p>
							Stock: <span className='text-red-500'>{stock}</span>
						</p>
					</div>
				</div>
			</Dropdown.Item>
			<Dropdown.Separator />
		</>
	);
}
export default ItemFavorite;
