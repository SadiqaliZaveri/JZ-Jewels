import React from 'react'

const dataObject = {
	'@context': 'http://schema.org',
	'@type': 'LocalBusiness',
	name: 'Crafted Jewellers',
	image:
		'https://craftedjewellers.in/images/icons/crafted-jewellers-logo-594x60.png',
	telephone: '+919930757552',
	email: 'support@craftedjewellers.in',
	priceRange: '$$$',
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'Al-Javherat, Juhu Circle, JVPD Scheme',
		addressLocality: 'Mumbai',
		addressRegion: 'Maharashtra',
		addressCountry: 'India',
		postalCode: '400049',
	},
	url: 'https://craftedjewellers.in/',
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
