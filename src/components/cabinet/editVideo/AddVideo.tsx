import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IVideoPush } from '../../../interfaces/video.interfaces'
import { useAddVideoMutation } from '../../../services/video.services'
import { useCabinetContext } from '../../layout/userCabinet/userCabinetLayout'
import EditVideoForm from './editVideoForm/EditVideoForm'

const AddVideo: React.FC = () => {
	const [thumbnail, setThumbnail] = useState<File | string | undefined>()
	const [video, setVideo] = useState<File | string | undefined>()
	const { register, handleSubmit } = useForm<any>()
	const [addVideo] = useAddVideoMutation()
	const { userResponse } = useCabinetContext()
	const onSubmit = (data: IVideoPush) => {
		let formData = new FormData()
		formData.append('thumbnail', thumbnail as File)
		formData.append('video', video as File)
		if (userResponse && userResponse?.data?.user.id) {
			formData.append('authorId', userResponse?.data?.user.id)
		}
		formData.append('description', data.description)
		formData.append('title', data.title)
		addVideo(formData)
	}
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<EditVideoForm
					register={register}
					video={video}
					setVideo={setVideo}
					thumbnail={thumbnail}
					setThumbnail={setThumbnail}
				/>
			</form>
		</>
	)
}

export default AddVideo
