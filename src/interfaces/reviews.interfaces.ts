export interface IReview {
	id: number
	videoId?: number
	description: string
	authorId: number
}
export interface IReviewResponse extends IReview {
	authorFirstName: string
	authorLastName: string
	authorThumbnail: string
}
export interface IReviewRequest extends Omit<IReview, 'id' | 'authorId'> {}
