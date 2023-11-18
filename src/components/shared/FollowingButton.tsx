import {
	useFollowMutation,
	useIsFollowingQuery,
	useUnfollowMutation,
} from '../../services/auth.services'
import Button from '../ui/button/Button'
interface IProps {
	userId?: number
}
const FollowingButton: React.FC<IProps> = ({ userId }) => {
	const { data: following } = useIsFollowingQuery(userId)
	const [follow] = useFollowMutation()
	const [unfollow] = useUnfollowMutation()
	const handleFollow = () => {
		follow(userId)
	}
	const handleUnfollow = () => {
		unfollow(userId)
	}
	return (
		<>
			{following?.isFollowing ? (
				<Button variant='contained-light' onClick={handleUnfollow}>
					Cancel subscription
				</Button>
			) : (
				<Button onClick={handleFollow}>Subscribe </Button>
			)}
		</>
	)
}

export default FollowingButton
