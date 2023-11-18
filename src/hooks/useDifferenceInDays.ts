export const useDifferenceInDays = (date: string | undefined) => {
	let time = ''
	if (date) {
		let publicationTime
		publicationTime = new Date(date)
		const today = new Date()
		const Difference_In_Time =
			(today.getTime() - publicationTime.getTime()) / 1000
		if (Difference_In_Time >= 31536000) {
			time = Math.floor(Difference_In_Time / 31536000) + ' year(s)'
		} else if (Difference_In_Time >= 2592000) {
			time = Math.floor(Difference_In_Time / 2592000) + ' month'
		} else if (Difference_In_Time >= 604800) {
			time = Math.floor(Difference_In_Time / 604800) + ' week(s)'
		} else if (Difference_In_Time >= 86400) {
			time = Math.floor(Difference_In_Time / 86400) + ' day(s)'
		} else if (Difference_In_Time >= 3600) {
			time = Math.floor(Difference_In_Time / 3600) + ' hour(s)'
		} else if (Difference_In_Time >= 60) {
			time = Math.floor(Difference_In_Time / 60) + ' minute(s)'
		}
	}
	return time
}
