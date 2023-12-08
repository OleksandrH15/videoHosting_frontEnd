//import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useRegistrationMutation } from '../../../services/auth.services'
import Button from '../../ui/button/Button'
import Input from '../../ui/input/Input'
import s from '../Auth.module.scss'
function SignUp() {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm()
	const [register] = useRegistrationMutation()
	const onSubmit = (data: any) => {
		register(data)
	}

	return (
		<div className={s.authContainer}>
			<div className={s.authContent}>
				<h5>Sign up</h5>
				<form onSubmit={handleSubmit(onSubmit)} className={s.inputs}>
					<div className={s.name}>
						<Controller
							name='firstName'
							control={control}
							rules={{ required: 'First Name is required' }}
							render={({ field, fieldState }) => (
								<>
									<Input {...field} placeholder='First name' />
									{fieldState.error && (
										<p style={{ color: 'red' }}>{fieldState.error.message}</p>
									)}
								</>
							)}
						/>
						<Controller
							name='lastName'
							control={control}
							rules={{ required: 'Last Name is required' }}
							render={({ field, fieldState }) => (
								<>
									<Input {...field} placeholder='Last name' />
									{fieldState.error && (
										<p style={{ color: 'red' }}>{fieldState.error.message}</p>
									)}
								</>
							)}
						/>
					</div>
					<Controller
						name='email'
						control={control}
						rules={{
							required: 'Email is required',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Invalid email address',
							},
						}}
						render={({ field, fieldState }) => (
							<>
								<Input {...field} placeholder='Email' />
								{fieldState.error && (
									<p style={{ color: 'red' }}>{fieldState.error.message}</p>
								)}
							</>
						)}
					/>{' '}
					<Controller
						name='password'
						control={control}
						rules={{
							required: 'Password is required',
							pattern: {
								value: /^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
								message:
									'Password must contain at least one uppercase letter, one symbol, and be at least 8 characters long.',
							},
						}}
						render={({ field, fieldState }) => (
							<>
								<Input {...field} placeholder='Password' />
								{fieldState.error && (
									<p style={{ color: 'red' }}>{fieldState.error.message}</p>
								)}
							</>
						)}
					/>
					<Button type='submit' variant='contained-light'>
						Sign Up
					</Button>
					<Link to='/login'>Already have an account? Sign in</Link>
				</form>
			</div>
		</div>
	)
}

export default SignUp
