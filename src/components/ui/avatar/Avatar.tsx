import clsx from 'clsx'
import s from './Avatar.module.scss'
interface IProps {
	src?: string
	alt?: string
	size?: 'small' | 'huge'
}
const Avatar: React.FC<IProps> = ({ src, alt, size = 'small' }) => {
	return (
		<div
			className={clsx(s.container, {
				[s.huge]: size === 'huge',
				[s.small]: size === 'small',
			})}
		>
			<img
				className={s.avatar}
				src={
					src
						? src
						: 'https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg'
				}
				alt={alt}
			/>
		</div>
	)
}

export default Avatar
