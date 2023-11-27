import { formatPrice } from "@/lib/formatPrice";


function PriceTag({ price, discount }) {
  return (
    <>
      {discount ? (
        <div className='flex flex-col mt-2 duration-200 hover:scale-125 hover:translate-x-5 hover:z-20'>
          <p className='text-xs'>Antes: <span className="text-red-500 line-through">{formatPrice(price)}</span><span className="ml-3 text-green-500">{`${discount} % OFF`}</span></p>
          <p> Ahora: <span className="text-green-500">{formatPrice(price-(price*(discount / 100)))}</span></p>
        </div>
      ) : <p>Precio: <span  className="text-green-500">{formatPrice(price)}</span></p>}
    </>
  );
}
export default PriceTag;
