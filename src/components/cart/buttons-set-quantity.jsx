import { Icon } from '../icons';

function ButtonsSetQuantity({ totalQuantity, setTotalQuantity }) {
	return (
		<div className='flex gap-1'>
			<Icon
				name='MinusSquare'
				size='28px'
				className='cursor-pointer active:text-red-600'
				onClick={() => setTotalQuantity((prev) => prev - 1)}
			/>
			<p className='flex items-center justify-center px-2 font-bold border-2 border-gray-500 rounded-md'>
				{totalQuantity}
			</p>
			<Icon
				name='PlusSquare'
				size='28px'
				className='cursor-pointer active:text-blue-600'
				onClick={() => setTotalQuantity((prev) => prev + 1)}
			/>
		</div>
	);
}
export default ButtonsSetQuantity;
