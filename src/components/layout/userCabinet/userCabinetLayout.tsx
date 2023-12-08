import { UseQueryHookResult } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
	FetchBaseQueryMeta,
	QueryDefinition,
} from '@reduxjs/toolkit/query'
import { Outlet, useOutletContext } from 'react-router-dom'
import { IMeResponse } from '../../../interfaces/auth.interfaces'
import { useGetUserQuery } from '../../../services/auth.services'
import NavBar from './navBar/NavBar'

const UserCabinetLayout: React.FC = () => {
	const userResponse = useGetUserQuery()

	return (
		<>
			<NavBar />
			<div style={{ marginLeft: '250px' }}>
				<Outlet context={{ userResponse } satisfies ContextType} />
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
}

export function useCabinetContext() {
	return useOutletContext<ContextType>()
}

export default UserCabinetLayout
