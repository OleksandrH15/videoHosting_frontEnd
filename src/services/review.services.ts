import {
	IReviewRequest,
	IReviewResponse,
} from '../interfaces/reviews.interfaces'
import { api } from './api'

export const reviewApi = api.injectEndpoints({
	endpoints: builder => ({
		getReviewsById: builder.query<IReviewResponse[], number | undefined>({
			query: id => `Review/${id}`,
			providesTags: ['Review'],
		}),
		addReview: builder.mutation<void, IReviewRequest>({
			query: body => ({
				url: '/Review',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Review'],
		}),
	}),
})

export const { useGetReviewsByIdQuery, useAddReviewMutation } = reviewApi
