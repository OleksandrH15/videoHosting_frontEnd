import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetUserByIdQuery } from '../../services/auth.services'
import { useGetAllVideosByUserIdQuery } from '../../services/video.services'
import VideoItem from '../subscriberVideos/videoItem/VideoItem'
import s from './ChannelPage.module.scss'
import UserData from './userData/UserData'

const ChannelPage: React.FC = () => {
	const { userId } = useParams()
	const { data: user } = useGetUserByIdQuery(userId)
	const { data: video } = useGetAllVideosByUserIdQuery(userId)
	return (
		<div className={s.wrapper}>
			<UserData user={user} />
			<hr />
			<div className={s.videos}>
				{video
					?.map(v => (
						<div key={v.id} className={s.videoItem}>
							<VideoItem video={v} />
						</div>
					))
					.reverse()}
			</div>
		</div>
	)
}

export default ChannelPage
