import env from '../../env'

module.exports = {
	getBaseUrl: () => {
		const protocol = env.PROTOCOL === 'HTTP2' ? 'https://' : 'http://'
		switch (env.TIER) {
			case 'production':
				return 'https://zavtin.com/'
			case 'dev':
			default:
				return `${protocol}localhost:3000/`
		}
	},
}
