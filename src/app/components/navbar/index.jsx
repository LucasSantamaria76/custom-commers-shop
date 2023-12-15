'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Badge, Nav } from 'rsuite';
import { Icon } from '@/components/icons';
import UserMenu from './components/user-menu';
import NavLink from '@/components/nav-link';
import AuthModal from '@/app/auth/modal';
import { useModalStore } from '@/stores/modals';
import { AUTH_MODAL } from '@/constants';
import { useUserStore } from '@/stores/user';
import FavoritesList from './components/favorites-list';
import { ShoppingBag } from '@/components/ui';
import { cn } from '@/lib/utils';

function Navbar({ session }) {
	const auth_modal = useModalStore.use[AUTH_MODAL]();
	const pathname = usePathname();
	const [active, setActive] = useState(pathname.replace('/', ''));
	const [productInCart, setProductInCart] = useState(0);
	const setUser = useUserStore.use.setUser();
	const cartItems = useUserStore.use.cart_items();

	useEffect(() => {
		session ? setUser(session.profile) : setUser(null);
	}, [session]);

	useEffect(() => {
		Object.values(cartItems).length
			? setProductInCart(Object.values(cartItems).reduce((acc, val) => (acc += val.quantity), 0))
			: setProductInCart(0);
	}, [cartItems]);

	return (
		<div className='fixed top-0 z-50 flex items-center justify-around w-full shadow bg-white/70 backdrop-blur-lg dark:shadow-slate-300 h-14'>
			<div className=''>Logo</div>
			<Nav
				appearance='subtle'
				activeKey={active}
				onSelect={setActive}
				className='hidden text-lg font-semibold md:flex'>
				<Nav.Item eventKey='outstanding' className=' h-14' as={NavLink} href='/outstanding'>
					Inicio
				</Nav.Item>
				<Nav.Item eventKey='products' className=' h-14' as={NavLink} href='/products'>
					Productos
				</Nav.Item>
				<Nav.Item eventKey='contact' className=' h-14' as={NavLink} href='/contact'>
					Contáctame
				</Nav.Item>
			</Nav>
			<div className='flex items-center gap-8'>
				<div
					className={cn('items-center flex justify-between w-36', {
						hidden: !session,
					})}>
					<FavoritesList />
					<Icon name='Bell' size='28px' />
					<Link href={'/cart'}>
						<ShoppingBag productInCart={productInCart} />
					</Link>
				</div>
				{!session ? <AuthModal /> : null}
				<UserMenu session={session} />
			</div>
		</div>
	);
}
export default Navbar;
