import { BsList } from 'react-icons/bs'
import s from './Logo.module.scss'
interface IProps {
	setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
	openMenu: boolean
}
const Logo: React.FC<IProps> = ({ setOpenMenu, openMenu }) => {
	const handleClick = () => {
		setOpenMenu(!openMenu)
	}
	return (
		<>
			<div className={s.menuIcon}>
				<button onClick={handleClick}>
					<BsList />
				</button>
			</div>
		</>
	)
}

export default Logo
