'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
	Button,
	ButtonGroup,
	Form,
	Input,
	Loader,
	Notification,
	Radio,
	RadioGroup,
	useToaster,
} from 'rsuite';

import { useModalStore } from '@/stores/modals';
import { AUTH_MODAL } from '@/constants';
import { InputPassword, TextInput } from '@/components/inputs';
import { loginModel, registerModel } from './schemas';
import { SignIn, SignUp } from './authFunctions';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { errorDB } from '@/constants';

const initialSignInForm = { email: '', password: '' };
const initialSignUpForm = { ...initialSignInForm, full_name: '', verifyPassword: '' };

function FormRegisterAndLogin() {
	const onClose = useModalStore.use.onClose();
	const [isSignIn, setIsSignIn] = useState(true);
	const [loading, setLoading] = useState(false);
	const [formValue, setFormValue] = useState(isSignIn ? initialSignInForm : initialSignUpForm);
	const formRef = useRef();
	const router = useRouter();
	const toast = useToaster();

	const handleSubmit = async () => {
		try {
			if (!formRef.current.check()) return;
			setLoading(true);
			const { error, info } = isSignIn ? await SignIn(formValue) : await SignUp(formValue);
			error && console.log(errorDB[error.message] ?? error.message);
			info && console.log({ info });
			if (!error) {
				router.refresh();
				onClose(AUTH_MODAL);
			} else
				toast.push(
					<Notification
						type={'error'}
						header={
							<p className='text-lg font-bold text-white'>
								{errorDB[error.message] ?? error.message}
							</p>
						}
						className='border-2 border-red-500 bg-red-400/50'
					/>,
					{
						duration: 2000,
					}
				);
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};

	return (
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
				{loading ? <Loader content='Enviando...' /> : 'Enviar'}
			</Button>
			{isSignIn && (
				<Button className='w-full mt-5' appearance='ghost' color='yellow' size='lg'>
					<Image width={24} height={24} src='/google.png' alt='logo de google' className='mr-2' />
					Iniciar sesión con Google
				</Button>
			)}
		</Form>
	);
}
export default FormRegisterAndLogin;
