import { useState } from 'react'
import { IVideoWithAuthorResponse } from '../../../interfaces/video.interfaces'
import s from './VideoDescription.module.scss'
interface IProps {
	videoResponse: IVideoWithAuthorResponse | undefined
}
const VideoDescription: React.FC<IProps> = ({ videoResponse }) => {
	const [open, setOpen] = useState(false)
	//const difference = useDifferenceInDays(videoResponse?.video.publicationDate)
	const handleClick = () => {
		setOpen(!open)
	}
	return (
		<div
			className={s.paper}
			onClick={handleClick}
			style={{ height: open ? 'auto' : '100px' }}
		>
			<div>{videoResponse?.video.publicationDate}</div>
			{videoResponse?.video.description}
		</div>
	)
}

export default VideoDescription
