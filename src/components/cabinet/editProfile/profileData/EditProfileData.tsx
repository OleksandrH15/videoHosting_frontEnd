import { Snackbar } from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IEditProfileForm, IUser } from '../../../../interfaces/auth.interfaces'
import { useUpdateProfileDataMutation } from '../../../../services/auth.services'
import Button from '../../../ui/button/Button'
import Input from '../../../ui/input/Input'
import s from './EditProfileData.module.scss'

interface IProps {
	user?: IUser
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref
) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

const EditProfileData: React.FC<IProps> = ({ user }) => {
	const [error, setError] = useState(false)
	const [updateProfileData, { isSuccess }] = useUpdateProfileDataMutation()

	const { register, handleSubmit } = useForm<IEditProfileForm>({
		defaultValues: {
			firstName: user?.firstName,
			lastName: user?.lastName,
			email: user?.email,
		},
	})
	const [open, setOpen] = useState(false)

	useEffect(() => {
		setOpen(true)
	}, [setOpen, open])

	const handleClose = (
		event: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return
		}
		setOpen(false)
	}
	const onSubmit = (data: IEditProfileForm) => {
		if (data.confirmPassword == data.password) {
			updateProfileData({
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				password: data.password,
			})
		} else {
			setError(true)
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className={s.container}>
				<Input
					placeholder='First name'
					registerConfig={register('firstName')}
				/>
				<Input placeholder='Last name' registerConfig={register('lastName')} />
				<Input placeholder='Email' registerConfig={register('email')} />
				<Input
					type='password'
					placeholder='Password'
					registerConfig={register('password')}
				/>
				<Input
					type='password'
					placeholder='Confirm password'
					registerConfig={register('confirmPassword')}
				/>
				{error && <p className='text-red-600'>Passwords is not the same!</p>}
				<Button type='submit'>Submit</Button>
			</form>
			{isSuccess && (
				<Snackbar
					open={open}
					autoHideDuration={3000}
					onClose={handleClose}
					message='Note archived'
				>
					<Alert
						onClose={handleClose}
						severity='success'
						sx={{ width: '100%' }}
					>
						Profile data was updated successfully!
					</Alert>
				</Snackbar>
			)}
		</>
	)
}

export default EditProfileData
