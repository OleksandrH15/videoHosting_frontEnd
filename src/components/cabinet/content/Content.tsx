import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { IVideoDataForm } from '../../../interfaces/video.interfaces'
import {
	useGetVideoByIdQuery,
	useUpdateVideoDataMutation,
} from '../../../services/video.services'
import EditVideoForm from '../editVideo/editVideoForm/EditVideoForm'
import VideoList from './videoList/VideoList'

const Content: React.FC = () => {
	const [thumbnail, setThumbnail] = useState<File | string | undefined>()
	const [video, setVideo] = useState<File | string | undefined>('video')
	const [isEdit, setIsEdit] = useState(false)
	const [videoId, setVideoId] = useState<number | null>(null)
	const [updateVideoData] = useUpdateVideoDataMutation()
	const { data: videoResponse, refetch } = useGetVideoByIdQuery(videoId)
	const { register, handleSubmit } = useForm<IVideoDataForm>()
	const navigate = useNavigate()
	const onSubmit = (data: IVideoDataForm) => {
		try {
			updateVideoData({
				videoId: videoId,
				description: data.description,
				title: data.title,
			})
			navigate('/cabinet/content')
		} catch (err) {}
	}

	useEffect(() => {
		if (videoId !== null) {
			refetch()
		}
	}, [videoId, refetch])

	return (
		<div>
			{isEdit && videoResponse?.video ? (
				<form onSubmit={handleSubmit(onSubmit)}>
					<EditVideoForm
						video={video}
						setVideo={setVideo}
						thumbnail={thumbnail}
						setThumbnail={setThumbnail}
						register={register}
						videoData={videoResponse?.video}
					/>
				</form>
			) : (
				<VideoList setIsEdit={setIsEdit} setVideoId={setVideoId} />
			)}
		</div>
	)
}

export default Content
