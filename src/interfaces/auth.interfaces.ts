export interface IRegister {
	firstName: string
	lastName: string
	email: string
	password: string
}
export interface ILogin extends Omit<IRegister, 'firstName, lastName'> {}
export interface IResult {
	message: string
	isSuccess: boolean
}
export interface IMeResponse {
	isSuccess: boolean
	user: IUser
}
export interface IGetFollowedUsersResponse {
	isSuccess: boolean
	followedUser: IUser
}
export interface IUser {
	id: number
	firstName: string
	lastName: string
	email: string
	thumbnail: string
}
export interface IUserById extends IUser {
	isFollowing: boolean
	subscribers: number
}
export interface IUserData
	extends Pick<
		IUserById,
		'firstName' | 'lastName' | 'thumbnail' | 'subscribers'
	> {
	isFollowing: boolean
}
export interface IEditProfileForm extends IRegister {
	password: string
	confirmPassword: string
}
