'use client';

import { useModalStore } from '@/stores/modals';
import { AUTH_MODAL } from '@/constants';
import { Modal } from 'rsuite';
import FormRegisterAndLogin from './form';

function AuthModal() {
	const onClose = useModalStore.use.onClose();
	const auth_modal = useModalStore.use[AUTH_MODAL]();

	return (
		<Modal
			open={auth_modal}
			autoFocus
			onClose={() => onClose(AUTH_MODAL)}
			dialogClassName='flex h-screen justify-center items-center select-none'>
			<Modal.Header />

			<Modal.Body>
				<FormRegisterAndLogin />
			</Modal.Body>
		</Modal>
	);
}
export default AuthModal;
