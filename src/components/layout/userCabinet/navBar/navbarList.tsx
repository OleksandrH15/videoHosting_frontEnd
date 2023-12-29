import { BiSolidVideos } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import { MdOutlineVideoCall } from 'react-icons/md'

export const navbarList = [
	{
		label: 'Edit profile',
		icon: <FaUser />,
		url: 'profile/edit',
	},
	{
		label: 'Content',
		icon: <BiSolidVideos />,
		url: 'content',
	},
	{
		label: 'Add video',
		icon: <MdOutlineVideoCall />,
		url: 'addVideo',
	},
]
