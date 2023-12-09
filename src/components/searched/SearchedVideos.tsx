import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { IUserById } from '../../interfaces/auth.interfaces'
import { IVideoS } from '../../interfaces/video.interfaces'
import { useSearchQuery } from '../../services/video.services'
import s from './SearchedVideos.module.scss'
import Filter from './filter/Filter'
import UserItem from './userItem/UserItem'
import VideoItem from './videoItem/VideoItem'
interface IProps {}
const SearchedVideos: React.FC<IProps> = ({}) => {
	const [searchParams, setSearchParams] = useSearchParams()
	const { data: searchResponse } = useSearchQuery({
		query: searchParams.get('query'),
		type: searchParams.get('type'),
	})
	const type = searchParams.get('type')

	return (
		<div className={s.wrapper}>
			<Filter searchParams={searchParams} setSearchParams={setSearchParams} />
			<div className={s.items}>
				{type === 'video' && (
					<>
						{searchResponse?.map((data: IVideoS) => {
							data.videoData && (
								<React.Fragment key={data.videoId}>
									<VideoItem data={data} />
								</React.Fragment>
							)
						})}
					</>
				)}
				{type === 'channel' && (
					<>
						{searchResponse?.map((data: IUserById) => (
							<React.Fragment key={data.id}>
								<UserItem user={data} />
							</React.Fragment>
						))}
					</>
				)}
			</div>
		</div>
	)
}

export default SearchedVideos
