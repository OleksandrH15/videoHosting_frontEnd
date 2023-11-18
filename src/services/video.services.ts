import { IVideoResponse, IVideoS } from '../interfaces/video.interfaces'
import { api } from './api'

export const videoApi = api.injectEndpoints({
	endpoints: builder => ({
		getVideoById: builder.query<IVideoResponse, number | undefined>({
			query: id => `Video/${id}`,
			providesTags: ['Video'],
		}),
		addLike: builder.mutation<IVideoResponse, number | string | undefined>({
			query: videoId => ({
				url: `Video/addLike?videoId=${videoId}`,
				method: 'PATCH',
			}),
			invalidatesTags: ['Video'],
		}),
		addDislike: builder.mutation<IVideoResponse, number | string | undefined>({
			query: videoId => ({
				url: `Video/addDislike?videoId=${videoId}`,
				method: 'PATCH',
			}),
			invalidatesTags: ['Video'],
		}),
		getFollowingVideos: builder.query<IVideoS[], void>({
			query: () => 'Video/followingVideos',
			providesTags: ['Video'],
		}),
		getAllVideosByUserId: builder.query<IVideoS[], number | string | undefined>(
			{
				query: userId => `/Video/getAllVideos/${userId}`,
			}
		),
	}),
})

export const {
	useGetVideoByIdQuery,
	useAddDislikeMutation,
	useAddLikeMutation,
	useGetFollowingVideosQuery,
	useGetAllVideosByUserIdQuery,
} = videoApi
