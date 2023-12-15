import { cn } from '@/lib/utils';
import { Badge } from 'rsuite';
import { Icon } from '../icons';

export function ShoppingBag({ productInCart }) {
	return (
		<div className='relative w-10 h-full'>
			<Badge
				content={productInCart}
				className={cn('absolute -left-2 -top-2 flex rounded-full bg-cyan-500', {
					hidden: !productInCart,
				})}
			/>
			<Icon name='ShoppingBag' size='28px' />
		</div>
	);
}
