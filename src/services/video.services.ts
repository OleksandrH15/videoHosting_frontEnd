import { IUserById } from '../interfaces/auth.interfaces'
import {
	IVideoS,
	IVideoWithAuthorResponse,
} from '../interfaces/video.interfaces'
import { api } from './api'

export const videoApi = api.injectEndpoints({
	endpoints: builder => ({
		getVideoById: builder.query<IVideoWithAuthorResponse, number | undefined>({
			query: id => `Video/${id}`,
			providesTags: ['Video'],
		}),
		addLike: builder.mutation<
			IVideoWithAuthorResponse,
			number | string | undefined
		>({
			query: videoId => ({
				url: `Video/addLike?videoId=${videoId}`,
				method: 'PATCH',
			}),
			invalidatesTags: ['Video'],
		}),
		addDislike: builder.mutation<
			IVideoWithAuthorResponse,
			number | string | undefined
		>({
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
		search: builder.query<
			IVideoS[] & IUserById[],
			{ query: string | null; type: string | null }
		>({
			query: ({ query, type }) => `/Video/search?query=${query}&type=${type}`,
			providesTags: ['Video'],
		}),
		addVideo: builder.mutation<void, FormData>({
			query: body => ({
				url: `/Video`,
				method: 'POST',
				body: body,
				formData: true,
			}),
		}),
	}),
})

export const {
	useGetVideoByIdQuery,
	useAddDislikeMutation,
	useAddLikeMutation,
	useGetFollowingVideosQuery,
	useGetAllVideosByUserIdQuery,
	useSearchQuery,
	useAddVideoMutation,
} = videoApi
