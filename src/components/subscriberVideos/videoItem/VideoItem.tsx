import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { IVideoS } from '../../../interfaces/video.interfaces'
import { useUserLayoutContext } from '../../layout/Layout'
import Avatar from '../../ui/avatar/Avatar'
import s from './VideoItem.module.scss'
interface IProps {
	video: IVideoS
}
const VideoItem: React.FC<IProps> = ({ video }) => {
	const { openMenu } = useUserLayoutContext()

	return (
		<div
			className={clsx(s.container, {
				[s.openMenu]: openMenu,
				[s.closedMenu]: !openMenu,
			})}
		>
			<Link to={`/video/${video?.videoId}`}>
				<img
					className={s.videoThumbnail}
					src={`data:image/png;base64, ${video.thumbnail}`}
					alt='thumbnail'
				/>

				<div className={s.data}>
					<Avatar src={video.authorThumbnail} />
					<div className={s.content}>
						<div className={s.title}>{video.title}</div>
						<div>{video.firstName + ' ' + video.lastName}</div>
						<div>{video.publicationDate}</div>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default VideoItem
