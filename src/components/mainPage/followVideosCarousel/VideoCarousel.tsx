import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useGetFollowingVideosQuery } from '../../../services/video.services'
import { useUserLayoutContext } from '../../layout/Layout'
import VideoItem from '../../subscriberVideos/videoItem/VideoItem'
import s from './VideoCarousel.module.scss'

interface IProps {}
const VideoCarousel: React.FC<IProps> = ({}) => {
	const { data: videos } = useGetFollowingVideosQuery()
	const { openMenu } = useUserLayoutContext()
	let [currentIndex, setCurrentIndex] = useState<number>(0)

	const numSlides = (videos?.length as number) - 3

	const handleClick = (index: number) => {
		setCurrentIndex(index)
	}

	const onArrowClick = (direction: string) => {
		const increment = direction === 'left' ? -1 : 1
		const newIndex =
			numSlides && (currentIndex + increment + numSlides) % numSlides
		setCurrentIndex(newIndex)
	}

	return (
		<div className={s.container}>
			{videos && videos?.length > 0 && (
				<>
					<button className={s.leftArrow} onClick={() => onArrowClick('left')}>
						<IoIosArrowBack />
					</button>
					<div
						className={clsx(s.carouselContainer, {
							[s.openMenu]: openMenu,
							[s.closedMenu]: !openMenu,
						})}
					>
						<motion.div
							animate={{
								x: openMenu
									? `-${currentIndex * 290}px`
									: `-${currentIndex * 345}px`,
							}}
							className={s.carousel}
						>
							{videos?.map((v, key) => (
								<div
									key={v.videoId}
									className={s.item}
									onClick={() => handleClick(key)}
								>
									<VideoItem video={v} />
								</div>
							))}
						</motion.div>
					</div>
					<button
						className={s.rightArrow}
						onClick={() => onArrowClick('right')}
					>
						<IoIosArrowForward />
					</button>
				</>
			)}
		</div>
	)
}

export default VideoCarousel
