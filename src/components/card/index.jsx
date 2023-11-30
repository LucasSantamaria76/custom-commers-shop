import { Panel } from "rsuite";
import { Icon } from "../icons";
import Image from "next/image";
import PriceTag from "./price-tag";
import ToggleFavorite from './toggle-favorite';

function Card({ id, name, description, price, discount, stock, categories, images }) {
	return (
		<Panel shaded bordered bodyFill className='w-[300px] hover:scale-105 duration-300'>
			<Image
				src={images[0]?.url}
				height={300}
				width={300}
				alt={`Imagen del producto ${name}`}
				className=' object-cover w-[300px] h-[300px]'
			/>
			<Panel header={name} className='flex flex-col justify-between h-56 border-t border-gray-300'>
				<p>Catálogo: {categories.name}</p>
				<p>{description}</p>
				<p className='mt-2'>Stock: {stock}</p>
				<PriceTag price={price} discount={discount} />
				<div className='flex items-center justify-end gap-2'>
					<Icon name='ShoppingBag' className='cursor-pointer' size='26px' />
					<ToggleFavorite id={id} />
				</div>
			</Panel>
		</Panel>
	);
}
export default Card;
