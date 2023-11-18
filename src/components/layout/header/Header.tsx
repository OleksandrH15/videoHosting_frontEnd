import { IUser } from '../../../interfaces/auth.interfaces'
import s from './Header.module.scss'
import Icons from './icons/Icons'
import Logo from './logo/Logo'
import Search from './search/Search'

interface IProps {
	setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
	openMenu: boolean
	user?: IUser
	userIsLoading: boolean
}

const Header: React.FC<IProps> = ({
	setOpenMenu,
	openMenu,
	user,
	userIsLoading,
}) => {
	return (
		<header>
			<div className={s.header}>
				<Logo setOpenMenu={setOpenMenu} openMenu={openMenu} />
				<Search />
				<Icons user={user} userIsLoading={userIsLoading} />
			</div>
		</header>
	)
}

export default Header
