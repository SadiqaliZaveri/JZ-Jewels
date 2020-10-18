import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import Router from 'next/router'
import Head from 'next/head'
import nextReduxWrapper from '../store'
import theme from '../themes'

import 'normalize.css'
import '../public/css/common.css'
import 'lazysizes'
import { TrackPageView } from '../helpers/analytics'

Router.events.on('routeChangeComplete', () => TrackPageView())

class CraftedJewellers extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<React.Fragment>
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, minimum-scale=1, minimal-ui"
					/>
				</Head>
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</React.Fragment>
		)
	}
}

export default nextReduxWrapper.withRedux(CraftedJewellers)
