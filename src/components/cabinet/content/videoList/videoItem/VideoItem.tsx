import { IVideoS } from '../../../../../interfaces/video.interfaces'
import { contentHeadersType } from '../VideoList'
import s from './VideoItem.module.scss'
interface IProps {
	video: IVideoS | contentHeadersType
	setIsEdit?: React.Dispatch<React.SetStateAction<boolean>>
	setVideoId?: React.Dispatch<React.SetStateAction<number | null>>
}
const VideoItem: React.FC<IProps> = ({ video, setIsEdit, setVideoId }) => {
	const handleChangeEdit = () => {
		if (setIsEdit) setIsEdit(true)
		if (setVideoId) setVideoId((video as IVideoS).videoId)
	}
	return (
		<div className={s.container}>
			<div className={s.thumbnail}>
				{(video as IVideoS).thumbnail ? (
					<img
						src={`data:image/png;base64,${(video as IVideoS).thumbnail}`}
						alt='thumbnail'
					/>
				) : (
					'Video'
				)}
			</div>
			<div className={s.videoData}>
				<div className={s.data}>
					<div className={s.title}>{video.title}</div>
					<div>{video.publicationDate}</div>
					<div className={s.rates}>
						<span>{video.likesCount}</span>
						<span>{video.dislikesCount}</span>
					</div>
					<button onClick={handleChangeEdit}>Update video</button>
				</div>
				<div className={s.description}>{(video as IVideoS).description}</div>
			</div>
		</div>
	)
}

export default VideoItem
