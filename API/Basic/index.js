/* global window */
/* eslint-disable no-underscore-dangle */

export const getBaseUrl = () => {
	const protocol =
		window.__ENV__.PROTOCOL === 'HTTP2' ? 'https://' : 'http://'
	switch (window.__ENV__.TIER) {
		case 'production':
			return 'https://zavtin.com/'
		case 'dev':
		default:
			return `${protocol}localhost:3000/`
	}
}

export default null
