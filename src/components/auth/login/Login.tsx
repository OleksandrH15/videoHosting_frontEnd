import { Avatar, Box, Button, TextField, Typography } from '@mui/material'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { ILogin } from '../../../interfaces/auth.interfaces'
import { useLoginMutation } from '../../../services/auth.services'
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
		<Box className={s.loginContainer}>
			<Box className={s.loginContent}>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)}>
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
								<TextField
									margin='normal'
									required
									fullWidth
									id='email'
									label='Email Address'
									autoComplete='email'
									autoFocus
									{...field}
								/>
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
								<TextField
									margin='normal'
									required
									fullWidth
									label='Password'
									type='password'
									id='password'
									autoComplete='current-password'
									{...field}
								/>
								{fieldState.error && (
									<p className={s.error}>{fieldState.error.message}</p>
								)}
								{isError && (
									<p className={s.error}>Email or password incorrect!</p>
								)}
							</>
						)}
					/>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
					>
						Sign In
					</Button>
				</form>
				<Link to='/registration'>Don't have an account? Sign Up</Link>
			</Box>
		</Box>
	)
}
