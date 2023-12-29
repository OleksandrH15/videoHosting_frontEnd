import { Box, IconButton } from '@mui/material'
import { useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { MdOutlineVideoCall } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { IUser } from '../../../../interfaces/auth.interfaces'
import Avatar from '../../../ui/avatar/Avatar'
import s from './Icons.module.scss'
import UserMenu from './userMenu/UserMenu'
interface IProps {
	user?: IUser
	userIsLoading: boolean
}
const Icons: React.FC<IProps> = ({ user, userIsLoading }) => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	return (
		<>
			<Box className={s.container}>
				<IconButton>
					<Link to={'/cabinet/addVideo'}>
						<MdOutlineVideoCall className={s.addVideoIcon} />
					</Link>
				</IconButton>
				{!userIsLoading && user ? (
					<IconButton onClick={handleClick}>
						<Avatar src={user.thumbnail} />
					</IconButton>
				) : (
					<Link to='login'>
						<Box className={s.login}>
							<BiUser />
							Login
						</Box>
					</Link>
				)}
			</Box>
			<UserMenu user={user} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
		</>
	)
}

export default Icons
