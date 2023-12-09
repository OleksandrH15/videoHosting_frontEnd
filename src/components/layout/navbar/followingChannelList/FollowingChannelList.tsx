import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useGetFollowingQuery } from '../../../../services/auth.services'
import Avatar from '../../../ui/avatar/Avatar'
import s from './FollowingChannelList.module.scss'

interface IProps {}
const FollowingChannelList: React.FC<IProps> = ({}) => {
	const [isOpen, setIsOpen] = useState(true)
	const { data: following } = useGetFollowingQuery()
	const handleClick = () => {
		setIsOpen(!isOpen)
	}
	return (
		<div className={s.container}>
			<div onClick={handleClick} className={s.header}>
				<span>Following</span>
				<motion.span
					initial={{ rotateZ: 0 }}
					animate={{ rotateZ: isOpen ? '180deg' : 0 }}
					exit={{ rotateZ: 0 }}
				>
					<IoIosArrowDown />
				</motion.span>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className={s.items}
						initial={{ height: 0 }}
						animate={{ height: 'auto' }}
						exit={{ height: 0 }}
					>
						{following?.map(f => (
							<Link to={`/channel/${f.id}`} className={s.item} key={f.id}>
								<Avatar src={f.thumbnail} />
								<div>{f.firstName + ' ' + f.lastName}</div>
							</Link>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default FollowingChannelList
