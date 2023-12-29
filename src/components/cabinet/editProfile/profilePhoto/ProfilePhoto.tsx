import { useRef } from 'react'
import { useUpdateProfilePhotoMutation } from '../../../../services/auth.services'
import Avatar from '../../../ui/avatar/Avatar'
import UploadPhoto from '../../../ui/uploadPhoto/UploadPhoto'
import s from './ProfilePhoto.module.scss'
interface IProps {
	photo: string
}
const ProfilePhoto: React.FC<IProps> = ({ photo }) => {
	const hiddenFileInput = useRef<HTMLInputElement>(null)
	const [updatePhoto] = useUpdateProfilePhotoMutation()
	const handleThumbnailRef = () => {
		if (hiddenFileInput.current) {
			hiddenFileInput.current.click()
		} else {
			console.error('hiddenFileInput is null or undefined')
		}
	}

	const handleSetPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files && e.target.files[0]
		if (selectedFile) {
			updatePhoto(selectedFile)
		}
	}
	return (
		<div className={s.container}>
			<Avatar size='huge' src={photo} />
			<UploadPhoto
				className={s.uploader}
				handleThumbnailRef={handleThumbnailRef}
			/>

			<input
				type='file'
				className='hidden'
				ref={hiddenFileInput}
				onChange={handleSetPhoto}
			/>
		</div>
	)
}

export default ProfilePhoto
