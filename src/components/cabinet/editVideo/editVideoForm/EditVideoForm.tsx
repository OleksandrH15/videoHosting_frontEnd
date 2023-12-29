import clsx from 'clsx'
import React, { useRef, useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
import ReactPlayer from 'react-player'
import { useConvertFile } from '../../../../hooks/useConvertFile'
import { IVideoWithLikes } from '../../../../interfaces/video.interfaces'
import Button from '../../../ui/button/Button'
import TextArea from '../../../ui/textArea/TextArea'
import UploadPhoto from '../../../ui/uploadPhoto/UploadPhoto'
import UploadVideo from '../uploadVideo/UploadVideo'
import s from './EditVideoForm.module.scss'

interface IProps {
	register: UseFormRegister<any>
	videoData?: IVideoWithLikes | undefined
	video: string | File | undefined
	setVideo: React.Dispatch<React.SetStateAction<string | File | undefined>>
	thumbnail: string | File | undefined
	setThumbnail: React.Dispatch<React.SetStateAction<string | File | undefined>>
}

const EditVideoForm: React.FC<IProps> = ({
	videoData,
	register,
	video,
	thumbnail,
	setThumbnail,
	setVideo,
}) => {
	const [title, setTitle] = useState(videoData?.title)
	const [description, setDescription] = useState(videoData?.description)
	const [convertedVideo, setEventVideo] = useConvertFile()
	const [convertedThumbnail, setEventThumbnail] = useConvertFile()
	const hiddenFileInput = useRef<HTMLInputElement>(null)

	const handleThumbnailRef = () => {
		if (hiddenFileInput.current) {
			hiddenFileInput.current.click()
		} else {
			console.error('hiddenFileInput is null or undefined')
		}
	}

	const handleVideoChange = (
		event: React.ChangeEventHandler<HTMLInputElement>
	) => {
		setEventVideo(event)
	}
	const handleThumbnailChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setEventThumbnail(event)
	}
	const handleSetThumbnail = (event: React.ChangeEvent<HTMLInputElement>) => {
		handleThumbnailChange(event)
		if (event.target.files) {
			setThumbnail(event.target.files[0])
		}
	}

	return (
		<div className={s.container}>
			{!video && (
				<UploadVideo
					setVideo={setVideo}
					handleVideoChange={handleVideoChange}
				/>
			)}
			{video && (
				<div className={s.modal}>
					<div className={s.content}>
						<div className={s.inputContainer}>
							<TextArea
								value={title}
								onChange={e => setTitle(e.target.value)}
								registerConfig={register('title')}
							/>
						</div>
						{title && (
							<p
								className={clsx(s.error, {
									[s.activeError]: title.length > 100,
								})}
							>{`${title.length} / 100`}</p>
						)}
						<div className={s.inputContainer}>
							<TextArea
								registerConfig={register('description')}
								value={description}
								onChange={e => setDescription(e.target.value)}
								rows={6}
							/>
						</div>
						{description && (
							<p
								className={clsx(s.error, {
									[s.activeError]: description.length > 5000,
								})}
							>{`${description.length} / 5000`}</p>
						)}
						<div>
							<input
								ref={hiddenFileInput}
								onChange={handleSetThumbnail}
								type='file'
								className='hidden'
							/>
						</div>
						<Button type='submit' variant='contained-light' size='max'>
							SUBMIT
						</Button>
					</div>
					{convertedVideo && (
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
					)}
				</div>
			)}
		</div>
	)
}

export default EditVideoForm
