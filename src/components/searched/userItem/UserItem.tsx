import { Link } from 'react-router-dom'
import { IUserById } from '../../../interfaces/auth.interfaces'
import FollowingButton from '../../shared/FollowingButton'
import Avatar from '../../ui/avatar/Avatar'
import s from './UserItem.module.scss'
interface IProps {
	user: IUserById
}
const UserItem: React.FC<IProps> = ({ user }) => {
	return (
		<Link to={`/channel/${user.id}`}>
			<div className={s.container}>
				<Avatar src={user?.thumbnail} />
				<div className={s.content}>
					<div className={s.videoData}>
						<span>{user?.firstName + ' ' + user?.lastName}</span>
						<span>
							{user?.subscribers}{' '}
							{user?.subscribers == 1 ? 'subscriber' : 'subscribers'}{' '}
						</span>
					</div>
					<div>
						<FollowingButton userId={user?.id} />
					</div>
				</div>
			</div>
		</Link>
	)
}

export default UserItem
