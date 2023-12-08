import { useRef } from 'react'
import { MdUpload } from 'react-icons/md'
import s from './UploadVideo.module.scss'
interface IProps {
	setVideo: any
	handleVideoChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	registerConfig?: any
}
const UploadVideo: React.FC<IProps> = ({
	handleVideoChange,
	registerConfig,
	setVideo,
}) => {
	const hiddenFileInput = useRef<HTMLInputElement>(null)

	const handleClick = () => {
		if (hiddenFileInput.current) {
			hiddenFileInput.current.click()
		} else {
			console.error('hiddenFileInput is null or undefined')
		}
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		handleVideoChange(event)
		if (event.target.files) setVideo(event.target.files[0])
	}
	return (
		<div className={s.container}>
			<div className={s.content}>
				<button type='button' className={s.uploadIcon} onClick={handleClick}>
					<MdUpload />
				</button>
				<input
					{...registerConfig}
					type='file'
					onChange={handleChange}
					ref={hiddenFileInput}
					style={{ display: 'none' }}
				/>
				<div>Click the button below to select them from your computer.</div>
				<div className={s.upload}></div>
			</div>
		</div>
	)
}

export default UploadVideo
