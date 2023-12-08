import { FormEvent, useState } from 'react'
import { IVideoWithAuthorResponse } from '../../../../interfaces/video.interfaces'
import { useAddReviewMutation } from '../../../../services/review.services'
import { useUserLayoutContext } from '../../../layout/Layout'
import Avatar from '../../../ui/avatar/Avatar'
import Button from '../../../ui/button/Button'
import TextArea from '../../../ui/textArea/TextArea'
import s from './AddReview.module.scss'
interface IProps {
	video?: IVideoWithAuthorResponse
}
const AddReview: React.FC<IProps> = ({ video }) => {
	const [review, setReview] = useState('')
	const [addReview] = useAddReviewMutation()

	const { userResponse } = useUserLayoutContext()
	const { data, isLoading } = userResponse || {}
	console.log()
	const submitReview = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		addReview({ description: review, videoId: video?.video.id })
		setReview('')
	}
	const clearInput = () => {
		setReview('')
	}
	return (
		<form onSubmit={submitReview}>
			<div className={s.writeReviewBlock}>
				{!isLoading && (
					<>
						<Avatar src={data?.user.thumbnail} />
						<div className={s.input}>
							<TextArea
								cols={110}
								rows={2}
								onChange={e => setReview(e.target.value)}
								value={review}
							/>
							<div className={s.buttons}>
								<Button
									variant='outlined-dark'
									onClick={clearInput}
									type='button'
								>
									Cancel
								</Button>
								<Button
									variant='contained-light'
									disabled={review.length == 0}
									type='submit'
								>
									Leave Feedback
								</Button>
							</div>
						</div>
					</>
				)}
			</div>
		</form>
	)
}

export default AddReview
