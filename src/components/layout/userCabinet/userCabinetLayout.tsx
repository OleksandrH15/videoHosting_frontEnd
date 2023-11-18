import { Outlet } from 'react-router-dom'
import NavBar from './navBar/NavBar'

const UserCabinetLayout: React.FC = () => {
	return (
		<>
			<NavBar />
			<div style={{ marginLeft: '250px' }}>
				<Outlet />
			</div>
		</>
	)
}

export default UserCabinetLayout
