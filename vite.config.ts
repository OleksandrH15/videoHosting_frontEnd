import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
	server: { https: true },
	plugins: [mkcert()],
	resolve: {
		alias: {
			'@mui/styled-engine': '@mui/styled-engine-sc',
		},
	},
})
