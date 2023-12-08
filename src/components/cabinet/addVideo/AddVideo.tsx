import clsx from 'clsx'
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactPlayer from 'react-player'
import { useConvertFile } from '../../../hooks/useConvertFile'
import { IVideoPush } from '../../../interfaces/video.interfaces'
import { useAddVideoMutation } from '../../../services/video.services'
import { useCabinetContext } from '../../layout/userCabinet/userCabinetLayout'
import Button from '../../ui/button/Button'
import TextArea from '../../ui/textArea/TextArea'
import UploadPhoto from '../../ui/uploadPhoto/UploadPhoto'
import UploadVideo from '../uploadVideo/UploadVideo'
import s from './AddVideo.module.scss'
const AddVideo: React.FC = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [thumbnail, setThumbnail] = useState<File>()
	const [video, setVideo] = useState<File>()
	const [addVideo] = useAddVideoMutation()
	const { userResponse } = useCabinetContext()
	const [convertedVideo, setEventVideo] = useConvertFile()
	const [convertedThumbnail, setEventThumbnail] = useConvertFile()
	const hiddenFileInput = useRef<HTMLInputElement>(null)
	const { register, handleSubmit } = useForm<IVideoPush>()

	const handleThumbnailRef = () => {
		if (hiddenFileInput.current) {
			hiddenFileInput.current.click()
		} else {
			console.error('hiddenFileInput is null or undefined')
		}
	}

	const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEventVideo(e)
	}
	const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEventThumbnail(e)
	}
	const handleSetThumbnail = (event: React.ChangeEvent<HTMLInputElement>) => {
		handleThumbnailChange(event)
		if (event.target.files) {
			setThumbnail(event.target.files[0])
		}
	}

	const onSubmit = (data: IVideoPush) => {
		console.log(thumbnail)
		let formData = new FormData()
		formData.append('thumbnail', thumbnail)
		formData.append('video', video)
		if (userResponse) {
			formData.append('authorId', userResponse?.data?.user.id)
		}
		formData.append('description', data.description)
		formData.append('title', data.title)
		addVideo(formData)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={s.container}>
			{!convertedVideo && (
				<UploadVideo
					setVideo={setVideo}
					handleVideoChange={handleVideoChange}
				/>
			)}
			{convertedVideo && (
				<div className={s.modal}>
					<div className={s.content}>
						<div className={s.inputContainer}>
							<TextArea
								value={title}
								onChange={e => setTitle(e.target.value)}
								registerConfig={register('title')}
							/>
						</div>
						<p
							className={clsx(s.error, { [s.activeError]: title.length > 100 })}
						>{`${title.length} / 100`}</p>
						<div className={s.inputContainer}>
							<TextArea
								registerConfig={register('description')}
								value={description}
								onChange={e => setDescription(e.target.value)}
								rows={6}
							/>
						</div>
						<p
							className={clsx(s.error, {
								[s.activeError]: description.length > 5000,
							})}
						>{`${description.length} / 5000`}</p>
						<div>
							<input
								ref={hiddenFileInput}
								onChange={handleSetThumbnail}
								type='file'
								style={{ display: 'none' }}
							/>
						</div>
						<Button type='submit' variant='contained-light' size='max'>
							SUBMIT
						</Button>
					</div>

					<div className={s.preview}>
						<span>Preview</span>
						<span>Video</span>
						<ReactPlayer
							url={convertedVideo as string}
							width={400}
							height={250}
							controls={true}
						/>
						<span>Thumbnail</span>
						{!thumbnail && (
							<UploadPhoto handleThumbnailRef={handleThumbnailRef} />
						)}

						{thumbnail && (
							<img src={convertedThumbnail as string} alt='thumbnail' />
						)}
					</div>
				</div>
			)}
		</form>
	)
}

export default AddVideo
