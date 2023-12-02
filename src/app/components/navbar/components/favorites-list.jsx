'use client';

import { Icon } from '@/components/icons';
import { supabaseClient } from '@/lib/supabase';
import { useUserStore } from '@/stores/user';
import { useEffect, useState } from 'react';
import { Dropdown } from 'rsuite';
import ItemFavorite from './item-favorite';

const renderIconButton = (props) => {
	return <Icon name='Bookmark' id='fav' size='28px' {...props} />;
};

async function getFavoritesProducts(user) {
	try {
		const { data, error } = await supabaseClient
			.from('products')
			.select(
				`
            id,name,stock,images(url),
            favorites!inner (
              user_id
            )
          `
			)
			.filter('favorites.user_id', 'eq', user);

		if (error) throw Error(error.message);

		return data;
	} catch (error) {
		console.log(error);
	}
}

function FavoritesList() {
	const user = useUserStore.use.id();
	const favorites = useUserStore.use.favorites();
	const [favoritesList, setFavoritesList] = useState([]);

	useEffect(() => {
		user && getFavoritesProducts(user).then((data) => setFavoritesList(data));
	}, [favorites]);

	return (
		<Dropdown placement='bottomEnd' renderToggle={renderIconButton} trigger='click'>
			{favoritesList.length ? (
				favoritesList.map((favorite) => <ItemFavorite key={favorite.id} {...favorite} />)
			) : (
				<Dropdown.Item disabled className='m-2'>
					<span className='font-bold text-red-400'>No hay ningún producto guardado</span>
				</Dropdown.Item>
			)}
		</Dropdown>
	);
}
export default FavoritesList;
