import { UseQueryHookResult } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
	FetchBaseQueryMeta,
	QueryDefinition,
} from '@reduxjs/toolkit/query'
import React, { useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import { IMeResponse } from '../../interfaces/auth.interfaces'
import { useGetUserQuery } from '../../services/auth.services'
import s from './Layout.module.scss'
import Header from './header/Header'
import Navbar from './navbar/Navbar'
const Layout: React.FC = () => {
	const userResponse = useGetUserQuery()

	const [openMenu, setOpenMenu] = useState(true)
	return (
		<>
			<div className={s.layoutContainer}>
				<Header
					setOpenMenu={setOpenMenu}
					openMenu={openMenu}
					user={userResponse.data?.user}
					userIsLoading={userResponse.isLoading}
				/>
				<Navbar openMenu={openMenu} />
			</div>
			<div className={s.outlet}>
				<Outlet context={{ setOpenMenu, userResponse } satisfies ContextType} />
			</div>
		</>
	)
}
type ContextType = {
	userResponse?: UseQueryHookResult<
		QueryDefinition<
			void,
			BaseQueryFn<
				string | FetchArgs,
				unknown,
				FetchBaseQueryError,
				{},
				FetchBaseQueryMeta
			>,
			'Auth',
			IMeResponse,
			'api'
		>
	>
	setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export function useCustomContext() {
	return useOutletContext<ContextType>()
}
export default Layout
