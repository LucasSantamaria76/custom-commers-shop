'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Form, Input, Modal, Notification, useToaster } from 'rsuite';

import { AUTH_MODAL } from '@/constants';
import { useModalStore } from '@/stores/modals';
import { InputPassword, TextInput } from '@/components/inputs';
import { loginModel } from './schemas';
import { SignIn } from './authFunctions';

const initialForm = { email: '', password: '' };

function AuthModal() {
	const onClose = useModalStore.use.onClose();
	const auth_modal = useModalStore.use[AUTH_MODAL]();
	const [formValue, setFormValue] = useState(initialForm);
	const router = useRouter();
	const toast = useToaster();

	const handleChange = (data) => setFormValue(data);

	const handleSubmit = async () => {
		const { error } = await SignIn(formValue);
		if (!error) {
			router.refresh();
			onClose(AUTH_MODAL);
		} else
			toast.push(
				<Notification
					type={'error'}
					header={error.message}
					className='border-2 border-red-500 bg-red-400/80'
				/>,
				{
					duration: 1500,
				}
			);
	};

	return (
		<Modal
			open={auth_modal}
			autoFocus
			onClose={() => onClose(AUTH_MODAL)}
			dialogClassName='flex h-screen justify-center items-center select-none'>
			<Modal.Header>
				<Modal.Title className='text-xl font-bold text-center'>Inicio de sesión</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<Form
					fluid
					model={loginModel}
					onSubmit={(e) => handleSubmit(e)}
					formValue={formValue}
					onChange={handleChange}>
					<TextInput name='email' label='Correo electrónico' />
					<InputPassword name='password' label='Contraseña' />

					<Button type='submit' className='w-full mt-5' appearance='ghost' size='lg'>
						Enviar
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	);
}
export default AuthModal;
