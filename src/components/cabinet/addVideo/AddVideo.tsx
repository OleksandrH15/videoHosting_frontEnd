import { Button } from '@mui/material'
import clsx from 'clsx'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import Input from '../../ui/input/Input'
import s from './AddVideo.module.scss'
const AddVideo: React.FC = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [video, setVideo] = useState<string | null>(null)
	const [thumbnail, setThumbnail] = useState<string | null>(null)

	const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setVideo(reader.result as string)
			}
			reader.readAsDataURL(file)
		}
	}
	const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setThumbnail(reader.result as string)
			}
			reader.readAsDataURL(file)
		}
	}
	return (
		<div className={s.container}>
			{!video && (
				<>
					<input
						style={{ display: 'none' }}
						id='raised-button-file'
						type='file'
						onChange={handleVideoChange}
					/>
					<label htmlFor='raised-button-file'>
						<Button component='span'>Upload</Button>
					</label>
				</>
			)}
			{!video && (
				<div className={s.modal}>
					<div className={s.content}>
						<div className={s.inputContainer}>
							<Input
								rows={3}
								value={title}
								onChange={e => setTitle(e.target.value)}
							/>
						</div>
						<p
							className={clsx(s.error, { [s.activeError]: title.length > 100 })}
						>{`${title.length} / 100`}</p>
						<div className={s.inputContainer}>
							<Input
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
							Upload thumbnail
							<input
								style={{ display: 'none' }}
								id='upload-thumbnail'
								type='file'
								onChange={handleThumbnailChange}
							/>
							<label htmlFor='upload-thumbnail'>
								<Button component='span'>Upload</Button>
							</label>
						</div>
						<div>{thumbnail && <img src={thumbnail} alt='thumbnail' />}</div>
					</div>
					<div>
						<ReactPlayer
							url={video as string}
							width={300}
							height={180}
							controls={true}
						/>
					</div>
				</div>
			)}
		</div>
	)
}

export default AddVideo
