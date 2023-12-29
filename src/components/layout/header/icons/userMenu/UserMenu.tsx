import {
	Box,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Popover,
} from '@mui/material'
import { FiLogOut } from 'react-icons/fi'
import { IoSettings } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../../../../../interfaces/auth.interfaces'
import { useLogoutMutation } from '../../../../../services/auth.services'
import Avatar from '../../../../ui/avatar/Avatar'
import s from './UserMenu.module.scss'

interface IProps {
	user?: IUser
	anchorEl: HTMLButtonElement | null
	setAnchorEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>
}
const UserMenu: React.FC<IProps> = ({ user, anchorEl, setAnchorEl }) => {
	const [logout] = useLogoutMutation()
	const navigate = useNavigate()
	const open = Boolean(anchorEl)
	const id = open ? 'simple-popover' : undefined
	const handleClose = () => {
		setAnchorEl(null)
	}

	const logoutUser = () => {
		logout()
		handleClose()
	}

	const handleNavigate = () => {
		navigate('/cabinet/profile/edit')
	}

	return (
		<Popover
			id={id}
			anchorEl={anchorEl}
			onClose={handleClose}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'left',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			className={s.userMenu}
			open={open}
			PaperProps={{
				style: {
					backgroundColor: '#202020',
					color: '#fff',
				},
			}}
		>
			<Box className={s.header}>
				<Avatar src={user?.thumbnail} />
				{user?.firstName + ' ' + user?.lastName}
			</Box>
			{user && (
				<List className={s.list}>
					<ListItem className={s.listItem} onClick={handleNavigate}>
						<ListItemIcon className={s.icon}>
							<IoSettings />
						</ListItemIcon>
						<ListItemText>Settings</ListItemText>
					</ListItem>
					<ListItem className={s.listItem} onClick={logoutUser}>
						<ListItemIcon className={s.icon}>
							<FiLogOut />
						</ListItemIcon>
						<ListItemText>Logout</ListItemText>
					</ListItem>
				</List>
			)}
		</Popover>
	)
}

export default UserMenu
