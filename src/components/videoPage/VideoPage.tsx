import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import {
	useGetAllVideosByUserIdQuery,
	useGetVideoByIdQuery,
} from '../../services/video.services'
import { useCustomContext } from '../layout/Layout'
import s from './VideoPage.module.scss'
import Reviews from './reviews/Reviews'
import VideoAction from './videoAction/VideoAction'
import VideoDescription from './videoDescription/VideoDescription'
import VideoItem from './videoItem/VideoItem'
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
				<Reviews videoResponse={undefined} />
			</div>
			<div className={s.videos}>
				{video
					?.filter(v => v.id != Number(id))
					.reverse()
					.map(v => (
						<React.Fragment key={v.id}>
							<VideoItem video={v} />
						</React.Fragment>
					))}
			</div>
		</div>
	)
}

export default VideoPage
