'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Nav } from 'rsuite';
import { Icon } from '@/components/icons';
import UserMenu from './user-menu';
import NavLink from '@/components/nav-link';

function Navbar({ session }) {
	const pathname = usePathname();
	const [active, setActive] = useState(pathname.replace('/', ''));

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
			<div className='flex items-center gap-8'>
				{session ? (
					<>
						<Icon name='Bookmark' id='fav' size='28px' />
						<Icon name='Bell' size='28px' />
						<Icon name='ShoppingBag' size='28px' />
					</>
				) : null}
				<UserMenu session={session} />
			</div>
		</div>
	);
}
export default Navbar;
