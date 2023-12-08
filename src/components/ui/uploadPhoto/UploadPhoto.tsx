import { RiImageAddFill } from 'react-icons/ri'

import s from './UploadPhoto.module.scss'
interface IProps {
	handleThumbnailRef: () => void
}
const UploadPhoto: React.FC<IProps> = ({ handleThumbnailRef }) => {
	return (
		<div className={s.container} onClick={handleThumbnailRef}>
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
