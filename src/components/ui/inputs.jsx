import { Icon } from '@/components/icons';
import { useState } from 'react';
import { Form, Input, InputGroup } from 'rsuite';

export const TextInput = ({ label, name, error, ...props }) => (
	<Form.Group controlId={name} {...props} className='w-full md:w-96'>
		<Form.ControlLabel className='mb-1 cursor-pointer'>{label}</Form.ControlLabel>
		<Form.Control name={name} size='lg' className='text-lg' />
	</Form.Group>
);

export const InputPassword = ({ label, name, error, ...props }) => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<>
			<Form.Group controlId={name} {...props}>
				<Form.ControlLabel className='mb-1 cursor-pointer'>{label}</Form.ControlLabel>
				<InputGroup size='lg'>
					<Form.Control
						name={name}
						type={showPassword ? 'text' : 'password'}
						autoComplete='off'
						className='text-lg'
					/>

					<Icon
						name={`Eye${showPassword ? 'Off' : ''}`}
						onClick={() => setShowPassword(!showPassword)}
						className='m-2 cursor-pointer'
					/>
				</InputGroup>
			</Form.Group>
		</>
	);
};
