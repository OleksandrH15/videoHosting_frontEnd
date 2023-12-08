import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { ILogin } from '../../../interfaces/auth.interfaces'
import { useLoginMutation } from '../../../services/auth.services'
import Button from '../../ui/button/Button'
import Input from '../../ui/input/Input'
import s from '../Auth.module.scss'

export default function SignIn() {
	const { handleSubmit, control } = useForm<ILogin>()
	const navigate = useNavigate()
	const [login, { isSuccess, isError }] = useLoginMutation()

	if (isSuccess) navigate('/')

	const onSubmit: SubmitHandler<ILogin> = data => {
		login(data)
	}

	return (
		<div className={s.authContainer}>
			<div className={s.authContent}>
				<h5>Sign in</h5>
				<form onSubmit={handleSubmit(onSubmit)} className={s.inputs}>
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
								<Input {...field} placeholder='Email' type='email' />
								{fieldState.error && (
									<p className={s.error}>{fieldState.error.message}</p>
								)}
							</>
						)}
					/>
					<Controller
						name='password'
						control={control}
						rules={{ required: 'Password is required' }}
						render={({ field, fieldState }) => (
							<>
								<Input {...field} placeholder='Password' type='password' />
								{fieldState.error && (
									<p className={s.error}>{fieldState.error.message}</p>
								)}
								{isError && (
									<p className={s.error}>Email or password incorrect!</p>
								)}
							</>
						)}
					/>
					<Button type='submit' variant='contained-light'>
						Sign In
					</Button>
				</form>
				<Link to='/registration'>Don't have an account? Sign Up</Link>
			</div>
		</div>
	)
}
