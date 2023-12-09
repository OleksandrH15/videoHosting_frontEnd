import { Link } from 'react-router-dom'
import { IVideoS } from '../../../interfaces/video.interfaces'
import Avatar from '../../ui/avatar/Avatar'
import s from './VideoItem.module.scss'
interface IProps {
	data?: IVideoS
}
const VideoItem: React.FC<IProps> = ({ data }) => {
	return (
		<Link to={`/video/${data?.videoId}`} className={s.container}>
			<div>
				<img
					className={s.videoThumbnail}
					src={`data:image/png;base64,${data?.thumbnail}`}
					alt='thumbnail'
				/>
			</div>
			<div className={s.data}>
				<div className={s.content}>
					<h1>{data?.title}</h1>
					<div>{data?.publicationDate}</div>
					<div className={s.authorData}>
						<Avatar src={data?.authorThumbnail} />
						<div>{data?.firstName + ' ' + data?.lastName}</div>
					</div>
					<div className={s.description}>{data?.description}</div>
				</div>
			</div>
		</Link>
	)
}

export default VideoItem
