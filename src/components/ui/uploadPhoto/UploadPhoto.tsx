import { RiImageAddFill } from 'react-icons/ri'

import clsx from 'clsx'
import s from './UploadPhoto.module.scss'
interface IProps {
	handleThumbnailRef: () => void
	className?: string
}
const UploadPhoto: React.FC<IProps> = ({ handleThumbnailRef, className }) => {
	return (
		<div className={clsx(s.container, className)} onClick={handleThumbnailRef}>
			<div className={s.content}>
				<span className={s.icon}>
					<RiImageAddFill />
				</span>
				<span className={s.text}>Upload thumbnail</span>
			</div>
		</div>
	)
}

export default UploadPhoto
