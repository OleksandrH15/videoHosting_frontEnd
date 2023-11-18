import { AiOutlineSearch } from 'react-icons/ai'
import s from './Search.module.scss'
const Search: React.FC = () => {
	return (
		<div className={s.container}>
			<input type='text' />
			<span>
				<AiOutlineSearch />
			</span>
		</div>
	)
}

export default Search
