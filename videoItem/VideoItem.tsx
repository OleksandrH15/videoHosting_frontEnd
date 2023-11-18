import { Link } from 'react-router-dom'
import { IVideoS } from '../../../interfaces/video.interfaces'
import s from './VideoItem.module.scss'
interface IProps {
	video: IVideoS
}
const VideoItem: React.FC<IProps> = ({ video }) => {
	console.log(video)
	return (
		<Link to={`/video/${video.videoId}`}>
			<div className={s.container}>
				<div>
					<img className={s.videoThumbnail} src={video.thumbnail} />
				</div>
				<div>
					<h3>{video.title}</h3>
					<span>{video.firstName + ' ' + video.lastName}</span>
					<div>
						<span>{video.publicationDate}</span>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default VideoItem
