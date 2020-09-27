const dataObject = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	url: 'https://www.zavtin.com',
	name: 'Zavtin Jewellers (OPC) Private Limited',
	contactPoint: {
		'@type': 'ContactPoint',
		telephone: '+91 9930757552',
		contactType: 'Customer service',
	},
}

const Organization = () => (
	<script
		type="application/ld+json"
		dangerouslySetInnerHTML={{
			__html: JSON.stringify(dataObject),
		}}
	/>
)

export default Organization
