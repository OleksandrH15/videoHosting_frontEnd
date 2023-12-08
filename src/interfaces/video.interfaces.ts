import { IUserData } from './auth.interfaces'

export interface IVideoWithAuthorResponse {
	video: IVideoWithLikes
	author: IUserData
}
export interface IVideoWithLikes extends IVideo {
	id: number

	likesCount: number
	dislikesCount: number
}
export interface IVideoPush {
	title: string
	description: string
	videoData: string
	authorId: number
	thumbnail: string
}
export interface IVideo {
	videoData: string
	description: string
	title: string
	publicationDate: string
	authorId: number
	thumbnail: string
}
export interface IVideoS extends IVideoWithLikes {
	videoId: number
	firstName: string
	lastName: string
	authorThumbnail: string
}
