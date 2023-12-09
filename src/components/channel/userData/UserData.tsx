import { IUserById } from '../../../interfaces/auth.interfaces'
import FollowingButton from '../../shared/FollowingButton'
import Avatar from '../../ui/avatar/Avatar'
import s from './UserData.module.scss'
interface IProps {
	user: IUserById | undefined
}
const UserData: React.FC<IProps> = ({ user }) => {
	return (
		<div className={s.container}>
			<Avatar src={user?.thumbnail} size='huge' />
			<div>
				<div className={s.title}>{user?.firstName + ' ' + user?.lastName} </div>
				<div>
					{user?.subscribers}{' '}
					{user?.subscribers == 1 ? 'subscriber' : 'subscriber'}
				</div>
				<div>
					<FollowingButton userId={user?.id} />
				</div>
			</div>
		</div>
	)
}

export default UserData
