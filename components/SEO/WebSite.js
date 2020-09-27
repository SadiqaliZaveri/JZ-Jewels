const dataObject = {
	'@context': 'http://schema.org',
	'@type': 'WebSite',
	name: 'Zavtin',
	url: 'https://zavtin.com/',
}

const WebSite = () => (
	<script
		type="application/ld+json"
		dangerouslySetInnerHTML={{
			__html: JSON.stringify(dataObject),
		}}
	/>
)

export default WebSite
