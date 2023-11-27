import { Icon } from '@/components/icons';
import { useState } from 'react';
import { Form, Input, InputGroup } from 'rsuite';

export const TextInput = ({ label, name, error, ...props }) => (
	<Form.Group controlId={name} {...props} className='w-full md:w-96'>
		<Form.ControlLabel className='mb-1 cursor-pointer'>{label}</Form.ControlLabel>
		<Form.Control name={name} size='lg' shouldResetWithUnmount={true} />
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
						shouldResetWithUnmount={true}
					/>

					<InputGroup.Button
						onClick={() => setShowPassword(!showPassword)}
						className='cursor-pointer'>
						<Icon name={`Eye${showPassword ? 'Off' : ''}`} />
					</InputGroup.Button>
				</InputGroup>
			</Form.Group>
		</>
	);
};
