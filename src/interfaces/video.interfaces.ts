import { IUserData } from './auth.interfaces'

export interface IVideoResponse {
	video: IVideo
	author: IUserData
}
export interface IVideo {
	id: number
	path: string
	description: string
	title: string
	publicationDate: string
	likesCount: number
	dislikesCount: number
	authorId: number
	thumbnail: string
}
export interface IVideoS extends IVideo {
	videoId: number
	firstName: string
	lastName: string
	authorThumbnail: string
}
