import { Avatar } from '@mui/material'
import { IReviewResponse } from '../../../../interfaces/reviews.interfaces'
import s from './ReviewItem.module.scss'
interface IProps {
	review: IReviewResponse
}
const ReviewItem: React.FC<IProps> = ({ review }) => {
	return (
		<div className={s.container}>
			<Avatar src={review.authorThumbnail}></Avatar>

			<div className={s.content}>
				{review.authorFirstName + ' ' + review.authorLastName}
				<div>{review.description}</div>
			</div>
		</div>
	)
}

export default ReviewItem
