import {
	Avatar,
	Box,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Popover,
} from '@mui/material'
import { FiLogOut } from 'react-icons/fi'
import { IUser } from '../../../../../interfaces/auth.interfaces'
import { useLogoutMutation } from '../../../../../services/auth.services'
import s from './UserMenu.module.scss'
interface IProps {
	user?: IUser
	anchorEl: HTMLButtonElement | null
	setAnchorEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>
}
const UserMenu: React.FC<IProps> = ({ user, anchorEl, setAnchorEl }) => {
	const [logout] = useLogoutMutation()

	const open = Boolean(anchorEl)
	const id = open ? 'simple-popover' : undefined
	const handleClose = () => {
		setAnchorEl(null)
	}

	const logoutUser = () => {
		logout()
		handleClose()
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
		>
			<Box className={s.header}>
				<Avatar src={user?.thumbnail}></Avatar>
				{user?.firstName + ' ' + user?.lastName}
			</Box>
			{user && (
				<List className={s.list}>
					<ListItem className={s.listItem} onClick={logoutUser}>
						<ListItemIcon>
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
