import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './NavBar.module.scss'
import { navbarList } from './navbarList'
const NavBar: React.FC = () => {
	return (
		<div className={s.container}>
			<ul>
				{navbarList.map(item => (
					<NavLink key={item.label} to={item.url}>
						<li className={s.listItem}>
							<span>{item.icon}</span>
							{item.label}
						</li>
					</NavLink>
				))}
			</ul>
		</div>
	)
}

export default NavBar
