import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './NavBar.module.scss'
import { navbarList } from './navbarList'
const NavBar: React.FC = () => {
	return (
		<div className={s.container}>
			<ul>
				{navbarList.map(item => (
					<li>
						<NavLink
							key={item.label}
							to={item.url}
							className={({ isActive }) =>
								[isActive ? s.active : '', s.listItem].join(' ')
							}
						>
							<span>{item.icon}</span>
							{item.label}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	)
}

export default NavBar
