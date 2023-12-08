import { useState } from 'react'

export const useConvertFile = () => {
	const [eventData, setEventData] =
		useState<React.ChangeEvent<HTMLInputElement>>()
	const [value, setValue] = useState<string>()
	const file = eventData?.target.files && eventData?.target.files[0]

	const updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEventData(event)
	}

	if (file) {
		const reader = new FileReader()
		reader.onloadend = () => {
			setValue(reader.result as string)
		}
		reader.readAsDataURL(file)
	}
	return [value, updateValue]
}
