import { useRef, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { useNavigate, useSearchParams } from 'react-router-dom'
import s from './Search.module.scss'

interface IProps {}
const Search: React.FC<IProps> = ({}) => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [search, setSearch] = useState(searchParams.get('query'))
	const inputRef = useRef<HTMLInputElement | null>(null)
	const navigate = useNavigate()

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value)
	}
	const handleSubmit = (event: any) => {
		event.preventDefault()
		if (search && search.length > 0)
			navigate(`/searched?query=${search}&type=video`)
	}
	const clearInput = () => {
		setSearch('')
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}
	return (
		<form onSubmit={handleSubmit} className={s.container}>
			<input
				type='text'
				onChange={handleChange}
				value={search as string}
				ref={inputRef}
			/>
			{search && search.length > 0 && (
				<button onClick={clearInput} type='button'>
					<IoMdClose />
				</button>
			)}
			<button type='submit' className={s.searchButton}>
				<AiOutlineSearch />
			</button>
		</form>
	)
}

export default Search
