import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.scss'
import { navbarList } from './assets/navbarList'
interface IProps {
	openMenu: boolean
}
const Navbar: React.FC<IProps> = ({ openMenu }) => {
	return (
		<AnimatePresence>
			{openMenu && (
				<motion.nav
					className={s.navbar}
					initial={{ marginLeft: '-13rem' }}
					animate={{ marginLeft: !openMenu ? '-13rem' : 0 }}
					exit={{ marginLeft: '-13rem' }}
				>
					<ul className={s.list}>
						{navbarList.map(item => (
							<li key={item.label}>
								<NavLink
									to={item.url}
									key={item.label}
									className={({ isActive }) =>
										[isActive ? s.active : '', s.listItem].join(' ')
									}
								>
									{item.icon}
									{item.label}
								</NavLink>
							</li>
						))}
					</ul>
				</motion.nav>
			)}
		</AnimatePresence>
	)
}

export default Navbar
