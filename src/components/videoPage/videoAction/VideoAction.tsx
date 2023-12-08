import { BiDislike, BiLike } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { IVideoWithAuthorResponse } from '../../../interfaces/video.interfaces'
import {
	useAddDislikeMutation,
	useAddLikeMutation,
} from '../../../services/video.services'
import FollowingButton from '../../shared/FollowingButton'
import Avatar from '../../ui/avatar/Avatar'
import Button from '../../ui/button/Button'
import s from './VideoAction.module.scss'
interface IProps {
	videoResponse?: IVideoWithAuthorResponse
}
const VideoAction: React.FC<IProps> = ({ videoResponse }) => {
	//const { userResponse } = useCustomContext()
	//const { data, isLoading } = userResponse || {}
	const [like] = useAddLikeMutation()
	const [dislike] = useAddDislikeMutation()
	const handleLike = () => {
		like(videoResponse?.video.id)
	}
	const handleDislike = () => {
		dislike(videoResponse?.video.id)
	}
	return (
		<div className={s.container}>
			<div className={s.authorAction}>
				<Link
					to={`/channel/${videoResponse?.video.authorId}`}
					className={s.author}
				>
					<Avatar src={videoResponse?.author.thumbnail} />
					<div className={s.authorData}>
						<span>
							{videoResponse?.author.firstName +
								' ' +
								videoResponse?.author.lastName}
						</span>
						<span>
							{videoResponse?.author.subscribers}{' '}
							{videoResponse?.author.subscribers == 1
								? ' subscriber'
								: 'subscribers'}{' '}
						</span>
					</div>
				</Link>
				<FollowingButton userId={videoResponse?.video.authorId} />
			</div>
			<div className={s.buttonGroup}>
				<Button onClick={handleLike}>
					<span>
						<BiLike />
					</span>
					{videoResponse?.video.likesCount}
				</Button>
				<span>|</span>
				<Button onClick={handleDislike}>
					<span>
						<BiDislike />
					</span>
					{videoResponse?.video.dislikesCount}
				</Button>
			</div>
		</div>
	)
}

export default VideoAction
