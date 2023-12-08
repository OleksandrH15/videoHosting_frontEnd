import { IVideoWithAuthorResponse } from '../../../interfaces/video.interfaces'
import { useGetReviewsByIdQuery } from '../../../services/review.services'
import AddReview from './addReview/AddReview'
import ReviewItem from './reviewItem/ReviewItem'
interface IProps {
	videoResponse: IVideoWithAuthorResponse | undefined
}
const Reviews: React.FC<IProps> = ({ videoResponse: video }) => {
	const { data: reviews } = useGetReviewsByIdQuery(video?.video.id)
	console.log(video)
	return (
		<div>
			<AddReview video={video} />
			{reviews
				?.map(r => (
					<div key={r.id}>
						<ReviewItem review={r} />
					</div>
				))
				.reverse()}
		</div>
	)
}

export default Reviews
