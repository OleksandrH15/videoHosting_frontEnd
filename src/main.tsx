import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/auth/login/Login'
import Registration from './components/auth/registration/Registration'
import AddVideo from './components/cabinet/addVideo/AddVideo'
import ChannelPage from './components/channel/ChannelPage'
import Layout from './components/layout/Layout'
import UserCabinetLayout from './components/layout/userCabinet/userCabinetLayout'
import MainPage from './components/mainPage/MainPage'
import SearchedVideos from './components/searched/SearchedVideos'
import Subscriptions from './components/subscriberVideos/Subscriptions'
import VideoPage from './components/videoPage/VideoPage'
import './index.css'
import { store } from './services/store'
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
			{
				path: '/video/:id',
				element: <VideoPage />,
			},
			{
				path: '/subscriptions',
				element: <Subscriptions />,
			},
			{
				path: '/channel/:userId',
				element: <ChannelPage />,
			},
			{
				path: '/searched',
				element: <SearchedVideos />,
			},
		],
	},
	{
		path: '/cabinet',
		element: <UserCabinetLayout />,
		children: [
			{
				path: 'addVideo',
				element: <AddVideo />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/registration',
		element: <Registration />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)
