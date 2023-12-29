import { useCabinetContext } from '../../layout/userCabinet/userCabinetLayout'
import s from './EditProfile.module.scss'
import EditProfileData from './profileData/EditProfileData'
import ProfilePhoto from './profilePhoto/ProfilePhoto'
const EditProfile: React.FC = () => {
	const { userResponse } = useCabinetContext()

	return (
		<div className={s.container}>
			{userResponse?.data && (
				<>
					<ProfilePhoto photo={userResponse?.data?.user.thumbnail} />
					<EditProfileData user={userResponse?.data?.user} />
				</>
			)}
		</div>
	)
}

export default EditProfile
