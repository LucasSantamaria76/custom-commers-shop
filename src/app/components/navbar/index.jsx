'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Badge, Nav } from 'rsuite';
import { Icon } from '@/components/icons';
import UserMenu from './components/user-menu';
import NavLink from '@/components/nav-link';
import AuthModal from '@/app/auth/modal';
import { useModalStore } from '@/stores/modals';
import { AUTH_MODAL } from '@/constants';
import { useUserStore } from '@/stores/user';
import FavoritesList from './components/favorites-list';
import Link from 'next/link';
import { cn } from '@/lib/utils';

function Navbar({ session }) {
	const auth_modal = useModalStore.use[AUTH_MODAL]();
	const pathname = usePathname();
	const [active, setActive] = useState(pathname.replace('/', ''));
	const setUser = useUserStore.use.setUser();

	const productInCart = Object.values(useUserStore.use.itemsCart()).reduce(
		(acc, val) => (acc += val)
	);

	useEffect(() => {
		session ? setUser(session.user?.profile) : setUser(null);
	}, [session]);

	return (
		<div className='flex items-center justify-around shadow dark:shadow-slate-300 h-14'>
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
			<div className='items-center hidden gap-8 md:flex'>
				{session ? (
					<>
						<FavoritesList />
						<Icon name='Bell' size='28px' />
						<Link href='/cart' className='relative'>
							<Badge
								content={productInCart}
								className={cn('absolute -left-2 -top-2 flex rounded-full bg-cyan-500', {
									hidden: !productInCart,
								})}
							/>
							<Icon name='ShoppingBag' size='28px' />
						</Link>
					</>
				) : auth_modal ? (
					<AuthModal />
				) : null}
				<UserMenu session={session} />
			</div>
		</div>
	);
}
export default Navbar;
