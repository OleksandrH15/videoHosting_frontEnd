//import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Box } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useRegistrationMutation } from '../../../services/auth.services'
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
		<Box className={s.loginContainer}>
			<Box className={s.loginContent}>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
				<Typography component='h1' variant='h5'>
					Sign up
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<Controller
								name='firstName'
								control={control}
								rules={{ required: 'First Name is required' }}
								render={({ field, fieldState }) => (
									<>
										<TextField
											autoComplete='given-name'
											required
											fullWidth
											id='firstName'
											label='First Name'
											autoFocus
											{...field}
										/>
										{fieldState.error && (
											<p style={{ color: 'red' }}>{fieldState.error.message}</p>
										)}
									</>
								)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Controller
								name='lastName'
								control={control}
								rules={{ required: 'Last Name is required' }}
								render={({ field, fieldState }) => (
									<>
										<TextField
											required
											fullWidth
											id='lastName'
											label='Last Name'
											autoComplete='family-name'
											{...field}
										/>
										{fieldState.error && (
											<p style={{ color: 'red' }}>{fieldState.error.message}</p>
										)}
									</>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
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
											required
											fullWidth
											id='email'
											label='Email Address'
											autoComplete='email'
											{...field}
										/>
										{fieldState.error && (
											<p style={{ color: 'red' }}>{fieldState.error.message}</p>
										)}
									</>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
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
										<TextField
											required
											fullWidth
											label='Password'
											type='password'
											id='password'
											autoComplete='new-password'
											{...field}
										/>
										{fieldState.error && (
											<p style={{ color: 'red' }}>{fieldState.error.message}</p>
										)}
									</>
								)}
							/>
						</Grid>
					</Grid>

					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
					>
						Sign Up
					</Button>
					<Grid container justifyContent='flex-end'>
						<Grid item>
							<Link to='/login'>Already have an account? Sign in</Link>
						</Grid>
					</Grid>
				</form>
			</Box>
		</Box>
	)
}

export default SignUp
