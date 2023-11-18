import clsx from 'clsx'
import s from './Button.module.scss'
interface IProps {
	children?: any
	onClick?: any
	className?: any
	disabled?: boolean
	type?: 'button' | 'submit' | 'reset' | undefined
	variant?:
		| 'outlined-light'
		| 'outlined-dark'
		| 'contained-dark'
		| 'contained-light'
}
const Button: React.FC<IProps> = ({
	children,
	onClick,
	className,
	variant = 'contained-dark',
	disabled,
	type,
}) => {
	return (
		<div
			onClick={onClick}
			className={clsx(s.container, className, {
				[s.outlinedLight]: variant === 'outlined-light',
				[s.outlinedDark]: variant === 'outlined-dark',
				[s.containedDark]: variant === 'contained-dark',
				[s.containedLight]: variant === 'contained-light',
				[s.disabled]: disabled,
			})}
		>
			<button disabled={disabled} type={type}>
				{children}
			</button>
		</div>
	)
}

export default Button
