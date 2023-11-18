import s from './Input.module.scss'
interface IProps {
	value?: string | number
	cols?: number
	rows?: number
	onChange?:
		| React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
		| undefined
}
const Input: React.FC<IProps> = ({ value, cols, rows = 1, onChange }) => {
	return (
		<div className={s.container}>
			<textarea
				value={value}
				onChange={onChange}
				cols={cols}
				rows={rows}
				className={s.input}
			/>
		</div>
	)
}

export default Input
