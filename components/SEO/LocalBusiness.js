const dataObject = {
	'@context': 'http://schema.org',
	'@type': 'LocalBusiness',
	name: 'Zavtin',
	image: 'https://zavtin.com/images/icons/zavtin-horizontal.png',
	telephone: '+919930757552',
	email: 'support@zavtin.com',
	priceRange: '$$$',
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'Al-Javherat, Juhu Circle, JVPD Scheme',
		addressLocality: 'Mumbai',
		addressRegion: 'Maharashtra',
		addressCountry: 'India',
		postalCode: '400049',
	},
	url: 'https://zavtin.com/',
}

const LocalBusiness = () => (
	<script
		type="application/ld+json"
		dangerouslySetInnerHTML={{
			__html: JSON.stringify(dataObject),
		}}
	/>
)

export default LocalBusiness
