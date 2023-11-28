'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
	Button,
	ButtonGroup,
	Form,
	Input,
	Modal,
	Notification,
	Radio,
	RadioGroup,
	useToaster,
} from 'rsuite';

import { AUTH_MODAL } from '@/constants';
import { useModalStore } from '@/stores/modals';
import { InputPassword, TextInput } from '@/components/inputs';
import { loginModel, registerModel } from './schemas';
import { SignIn, SignUp } from './authFunctions';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const initialSignInForm = { email: '', password: '' };
const initialSignUpForm = { ...initialSignInForm, full_name: '', verifyPassword: '' };

function AuthModal() {
	const onClose = useModalStore.use.onClose();
	const auth_modal = useModalStore.use[AUTH_MODAL]();
	const [isSignIn, setIsSignIn] = useState(true);
	const [formValue, setFormValue] = useState(isSignIn ? initialSignInForm : initialSignUpForm);
	const formRef = useRef();
	const router = useRouter();
	const toast = useToaster();

	const handleSubmit = async () => {
		if (!formRef.current.check()) return;

		const { error } = isSignIn ? await SignIn(formValue) : await SignUp(formValue);

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
			<Modal.Header />

			<Modal.Body>
				<Form
					fluid
					ref={formRef}
					model={isSignIn ? loginModel : registerModel}
					onSubmit={(e) => handleSubmit(e)}
					formValue={formValue}
					onChange={setFormValue}>
					<Form.Group controlId='isSignIn'>
						<RadioGroup
							name='isSignIn'
							inline
							appearance='picker'
							value={isSignIn}
							onChange={setIsSignIn}
							className='w-full overflow-hidden'>
							<Radio
								value={true}
								className={cn('w-1/2 text-center', {
									'bg-blue-50': isSignIn,
								})}>
								<p className='w-full text-xl'>Iniciar sesión</p>
							</Radio>
							<Radio
								value={false}
								className={cn('w-1/2 text-center', {
									'bg-blue-50': !isSignIn,
								})}>
								<p className='w-full text-xl'>Registrarse</p>
							</Radio>
						</RadioGroup>
					</Form.Group>
					{!isSignIn && <TextInput name='full_name' label='Nombre completo' />}
					<TextInput name='email' label='Correo electrónico' />
					<InputPassword name='password' label='Contraseña' />
					{!isSignIn && <InputPassword name='verifyPassword' label='Confirmar contraseña' />}

					<Button type='submit' className='w-full mt-5' appearance='ghost' size='lg'>
						Enviar
					</Button>
					{isSignIn && (
						<Button className='w-full mt-5' appearance='ghost' color='yellow' size='lg'>
							<Image
								width={24}
								height={24}
								src='/google.png'
								alt='logo de google'
								className='mr-2'
							/>
							Iniciar sesión con Google
						</Button>
					)}
				</Form>
			</Modal.Body>
		</Modal>
	);
}
export default AuthModal;
