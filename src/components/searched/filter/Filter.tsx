import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { SetURLSearchParams } from 'react-router-dom'
import s from './Filter.module.scss'
const data = [
	{
		label: 'Videos',
		value: 'video',
	},
	{
		label: 'Channels',
		value: 'channel',
	},
]
interface IProps {
	setSearchParams: SetURLSearchParams
	searchParams: URLSearchParams
}
const Filter: React.FC<IProps> = ({ setSearchParams, searchParams }) => {
	const [filter, setFilter] = useState(searchParams.get('type'))
	const type = searchParams.get('type')
	const handleChange = (value: string) => {
		setFilter(value)
	}
	useEffect(() => {
		setSearchParams(params => {
			params.set('type', filter as string)
			return params
		})
	}, [filter])

	return (
		<ul className={s.container}>
			{data.map(l => (
				<li
					key={l.value}
					onClick={() => handleChange(l.value)}
					className={clsx(s.li, {
						[s.active]: type == l.value,
					})}
				>
					{l.label}
				</li>
			))}
		</ul>
	)
}

export default Filter
