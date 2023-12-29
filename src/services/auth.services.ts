import {
	IGetFollowedUsersResponse,
	ILogin,
	IMeResponse,
	IRegister,
	IResult,
	IUser,
	IUserById,
} from '../interfaces/auth.interfaces'
import { api } from './api'

export const authApi = api.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation<IResult, ILogin>({
			query: body => ({
				url: '/Auth/login',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Auth'],
		}),
		getUser: builder.query<IMeResponse, void>({
			query: () => '/Auth/user',
			providesTags: ['Auth'],
		}),
		logout: builder.mutation<IResult, void>({
			query: () => ({
				url: '/Auth/logout',
				method: 'POST',
			}),
			invalidatesTags: ['Auth'],
		}),
		registration: builder.mutation<IResult, IRegister>({
			query: body => ({
				url: '/Auth/register',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Auth'],
		}),
		follow: builder.mutation<IResult, number | undefined>({
			query: id => ({
				url: `/Auth/follow/${id}`,
				method: 'POST',
			}),
			invalidatesTags: ['Auth'],
		}),
		unfollow: builder.mutation<IResult, number | undefined>({
			query: id => ({
				url: `/Auth/unfollow/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Auth'],
		}),
		isFollowing: builder.query<{ isFollowing: boolean }, number | undefined>({
			query: id => `/Auth/isFollowing/${id}`,
			providesTags: ['Auth'],
		}),
		getFollowedUser: builder.query<IGetFollowedUsersResponse, void>({
			query: () => '/Auth/followed-users',
			providesTags: ['Auth'],
		}),
		getUserById: builder.query<IUserById, number | string | undefined>({
			query: id => `/Auth/${id}`,
			providesTags: ['Auth'],
		}),
		getFollowing: builder.query<IUser[], void>({
			query: () => '/Auth/getFollowers',
		}),
		updateProfilePhoto: builder.mutation<any, any>({
			query: () => ({
				url: '/Auth/updateThumbnail',
				method: 'PATCH',
			}),
			invalidatesTags: ['Auth'],
		}),
		updateFirstName: builder.mutation<any, any>({
			query: () => ({
				url: '/Auth/updateFirstName',
				method: 'PATCH',
			}),
			invalidatesTags: ['Auth'],
		}),
		updateLastName: builder.mutation<any, any>({
			query: () => ({
				url: '/Auth/updateLastName',
				method: 'PATCH',
			}),
			invalidatesTags: ['Auth'],
		}),
		updateEmail: builder.mutation<any, any>({
			query: () => ({
				url: '/Auth/updateEmail',
				method: 'PATCH',
			}),
			invalidatesTags: ['Auth'],
		}),
		updatePassword: builder.mutation<any, any>({
			query: () => ({
				url: '/Auth/updatePassword',
				method: 'PATCH',
			}),
			invalidatesTags: ['Auth'],
		}),
		updateProfileData: builder.mutation<any, any>({
			query: body => ({
				url: '/Auth/updateProfile',
				method: 'PATCH',
				body,
			}),
			invalidatesTags: ['Auth'],
		}),
	}),
})

export const {
	useLoginMutation,
	useGetUserQuery,
	useLogoutMutation,
	useRegistrationMutation,
	useFollowMutation,
	useUnfollowMutation,
	useGetFollowedUserQuery,
	useIsFollowingQuery,
	useGetUserByIdQuery,
	useGetFollowingQuery,
	useUpdateProfilePhotoMutation,
	useUpdateEmailMutation,
	useUpdatePasswordMutation,
	useUpdateFirstNameMutation,
	useUpdateLastNameMutation,
	useUpdateProfileDataMutation,
} = authApi
