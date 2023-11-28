'use client';

import { Icon } from '@/components/icons';
import { AUTH_MODAL } from '@/constants';
import { useModalStore } from '@/stores/modals';
import { Avatar, Dropdown } from 'rsuite';
import { SignOut } from '../../auth/authFunctions';
import { useRouter } from 'next/navigation';

function UserMenu({ session }) {
	const onShow = useModalStore.use.onShow();
	const router = useRouter();

	async function handleLogout() {
		await SignOut();
		router.refresh();
	}

	const renderIconButton = (props) => {
		return (
			<>
				{session ? (
					session.user.profile?.avatar_url ? (
						<Avatar
							{...props}
							circle
							src={session.user.profile?.avatar_url}
							alt='Avatar de usuario'
						/>
					) : (
						<Avatar {...props} circle className='font-bold bg-teal-500' alt='Avatar de usuario'>
							{session.user.profile?.full_name
								? session.user.profile.full_name[0].toUpperCase()
								: session.user.email[0]?.toUpperCase()}
						</Avatar>
					)
				) : (
					<Icon name='UserRound' size='44px' {...props} className='p-1 rounded-full bg-slate-300' />
				)}
			</>
		);
	};

	return (
		<Dropdown renderToggle={renderIconButton} className='flex-col hidden md:flex'>
			{session ? (
				<>
					<Dropdown.Item disabled className='flex items-center gap-2 text-base text-blue-900'>
						Usuario:{' '}
						<span className='font-bold text-teal-700'>
							{session.user.profile?.full_name ?? session.user.email}
						</span>
					</Dropdown.Item>
					<Dropdown.Separator />
					<Dropdown.Item className='flex items-center gap-2 text-base'>
						<Icon name='UserCog' /> Editar perfil
					</Dropdown.Item>
					<Dropdown.Item onClick={handleLogout} className='flex items-center gap-2 text-base'>
						<Icon name='LogOut' />
						Cerrar sesión
					</Dropdown.Item>
				</>
			) : (
				<Dropdown.Item
					onClick={() => onShow(AUTH_MODAL)}
					className='flex items-center gap-2 text-base'>
					<Icon name='LogIn' />
					Iniciar sesión o registrarse
				</Dropdown.Item>
			)}
		</Dropdown>
	);
}
export default UserMenu;
