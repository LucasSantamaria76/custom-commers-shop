import { Panel } from "rsuite";
import { Icon } from "../icons";
import Image from "next/image";
import PriceTag from "./price-tag";

function Card({ name, description, price, discount, stock, categories, images }) {
  console.log(name, description);
  return (
    <Panel shaded bordered bodyFill className='w-[300px] hover:scale-105 duration-300'>
      <Image
        src={images[0]?.url}
        height={300}
        width={300}
        alt={`Imagen del producto ${name}`}
        className='object-cover w-[300px] h-[300px]'
      />
      <Panel header={name} className='relative h-56 border-t border-gray-300'>
        <Icon name='Bookmark' className='absolute cursor-pointer bottom-2 right-2' size='26px' />
        <Icon name='ShoppingBag' className='absolute cursor-pointer bottom-2 right-10' size='26px' />
        <p>Catálogo: {categories.name}</p>
        <p>{description}</p>
        <PriceTag price={price}discount={discount}/>
        <p className="mt-2">Stock: {stock}</p>
      </Panel>
    </Panel>
  );
}
export default Card;
