import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import {
	useGetAllVideosByUserIdQuery,
	useGetVideoByIdQuery,
} from '../../services/video.services'
import { useCustomContext } from '../layout/Layout'
import s from './VideoPage.module.scss'
import VideoAction from './videoAction/VideoAction'
import VideoDescription from './videoDescription/VideoDescription'
const VideoPage: React.FC = () => {
	const { id } = useParams()
	const { data: videoResponse } = useGetVideoByIdQuery(Number(id))
	const { setOpenMenu } = useCustomContext()
	const { data: video } = useGetAllVideosByUserIdQuery(
		videoResponse?.video.authorId
	)
	console.log(videoResponse)
	useEffect(() => {
		setOpenMenu(false)
	}, [setOpenMenu])
	return (
		<div className={s.container}>
			<div className={s.content}>
				<ReactPlayer
					width={900}
					height={500}
					controls={true}
					url={`https://drive.google.com/uc?export=view&id=${videoResponse?.video.path}`}
				/>
				<h1>{videoResponse?.video.title}</h1>
				<VideoAction videoResponse={videoResponse} />
				<VideoDescription videoResponse={videoResponse} />
			</div>
		</div>
	)
}

export default VideoPage
