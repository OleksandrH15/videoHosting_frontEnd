import React from 'react'
import { useGetFollowingVideosQuery } from '../../services/video.services'
import s from './Subscriptions.module.scss'
import VideoItem from './videoItem/VideoItem'
const Subscriptions: React.FC = () => {
	const { data: videos } = useGetFollowingVideosQuery()
	return (
		<div className={s.wrapper}>
			{videos
				?.map(video => (
					<div className={s.videoItem} key={video.id}>
						<VideoItem video={video} />
					</div>
				))
				.reverse()}
		</div>
	)
}

export default Subscriptions
