import clsx from 'clsx'
import { ChangeEvent } from 'react'
import s from './TextArea.module.scss'
interface IProps {
	value?: string | number
	cols?: number
	rows?: number
	variant?: 'contained' | 'outlined'
	registerConfig?: any
	onChange?:
		| React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
		| undefined
}
const TextArea: React.FC<IProps> = ({
	value,
	cols,
	rows = 1,
	onChange,
	variant = 'contained',
	registerConfig,
}) => {
	const autoHeight = (elem: HTMLTextAreaElement) => {
		elem.style.height = 'auto'
		elem.style.height = `${elem.scrollHeight}px`
	}

	const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
		autoHeight(e.target)
	}
	return (
		<div
			className={clsx(s.container, {
				[s.outlined]: variant === 'outlined',
				[s.contained]: variant === 'contained',
			})}
		>
			<textarea
				{...registerConfig}
				value={value}
				onChange={onChange}
				cols={cols}
				rows={rows}
				className={s.input}
				onInput={handleInput}
			/>
		</div>
	)
}

export default TextArea
