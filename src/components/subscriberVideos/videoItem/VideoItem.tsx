import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import { IVideoS } from '../../../interfaces/video.interfaces'
import s from './VideoItem.module.scss'
interface IProps {
	video: IVideoS
}
const VideoItem: React.FC<IProps> = ({ video }) => {
	return (
		<div className={s.container}>
			<Link to={`/video/${video?.videoId}`}>
				<img
					className={s.videoThumbnail}
					src={video.thumbnail}
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
