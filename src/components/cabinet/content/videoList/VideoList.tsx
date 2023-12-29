import React from 'react'
import { useGetAllVideosByUserIdQuery } from '../../../../services/video.services'
import { useCabinetContext } from '../../../layout/userCabinet/userCabinetLayout'
import VideoItem from './videoItem/VideoItem'

const contentHeaders = {
	title: 'Title',
	likesCount: 'Likes',
	dislikesCount: 'Dislikes',
	publicationDate: 'Date',
}

export type contentHeadersType = typeof contentHeaders
interface IProps {
	setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
	setVideoId: React.Dispatch<React.SetStateAction<number | null>>
}
const VideoList: React.FC<IProps> = ({ setIsEdit, setVideoId }) => {
	const { userResponse } = useCabinetContext()
	const { data: videos } = useGetAllVideosByUserIdQuery(
		userResponse?.data?.user.id
	)
	return (
		<div>
			<VideoItem video={contentHeaders} />
			{videos?.map(v => (
				<React.Fragment key={v.videoId}>
					<VideoItem video={v} setIsEdit={setIsEdit} setVideoId={setVideoId} />
				</React.Fragment>
			))}
		</div>
	)
}

export default VideoList
