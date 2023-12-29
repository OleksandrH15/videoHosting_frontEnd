import React from 'react'
import s from './Input.module.scss'

interface IProps {
	onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
	value?: string | number | readonly string[] | undefined
	onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
	onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined
	required?: boolean
	registerConfig?: any
	placeholder?: string
	name?: string
	type?: 'text' | 'email' | 'password'
	ref?: any
}

const Input: React.FC<IProps> = ({
	onChange,
	value,
	onBlur,
	onFocus,
	required,
	registerConfig,
	placeholder,
	name,
	type = 'text',
	ref,
}) => {
	return (
		<div className={s.container}>
			<input
				{...registerConfig}
				placeholder={placeholder}
				type={type}
				onChange={onChange}
				value={value}
				//onBlur={onBlur}
				onFocus={onFocus}
				required={required}
			/>
		</div>
	)
}

export default Input
