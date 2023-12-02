'use client';

import { useUserStore } from '@/stores/user';
import { Icon } from '../icons';
import { cn } from '@/lib/utils';

function ToggleFavorite({ id, size = '26' }) {
	const user = useUserStore.use.id();
	const favorites = useUserStore.use.favorites();
	const toggleFavorite = useUserStore.use.toggleFavorite();

	return (
		<div className='has-tooltip'>
			<span
				className={cn(
					'tooltip min-w-max rounded -translate-x-32 shadow-lg p-1 bg-teal-50 border border-teal-500 -mt-10',
					{
						'-mt-16 bg-red-50  border-red-500': !user,
					}
				)}>
				<div className='flex flex-col items-center'>
					{!user && <p>Iniciar sesión para</p>}
					<p className='m-1'>
						{favorites.includes(id) ? 'Quitar de ' : 'Guardar en '}{' '}
						<i className='font-bold'>Favoritos</i>
					</p>
				</div>
			</span>
			<Icon
				onClick={() => toggleFavorite(id, user)}
				name='Bookmark'
				className={cn('cursor-pointer', {
					'fill-orange-500/50': favorites.includes(id),
				})}
				size={`${size}px`}
			/>
		</div>
	);
}
export default ToggleFavorite;
