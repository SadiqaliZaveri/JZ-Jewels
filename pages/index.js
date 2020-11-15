import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { CDN } from '../helpers/constants'

import withLayout from '../components/Layout'

const SlideIn = keyframes`
	from {
		margin-top: 50px;
  	}

	to {
		margin-top: 20px;
	}
`

const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	&:last-child {
		margin-bottom: 50px;
	}
`

const Card = styled.div`
	width: 350px;
	background-color: ${props => props.theme.white};
	min-height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	animation: ${SlideIn} 0.3s ease-in;
	position: relative;
	border-radius: ${props => (props.round ? '40px' : '')};
	margin: ${props => (props.round ? '20px 20px 0 20px' : '20px 0 0 0')};
	box-shadow: ${props =>
		props.boxshadow ? `0 4px 2px 0 ${props.theme.boxShadow}` : ''};
	overflow: hidden;

	@media ${props => props.theme.mobileL} {
		min-height: 220px;
		padding: 0px 16px;
	}
`

const VideoCard = styled(Card)`
	width: 100%;
	background-color: ${props => props.theme.black};
	margin-top: 0px;
	@media ${props => props.theme.mobileL} {
		min-height: 240px;
	}
`

const SectionHeader = styled.h2`
	text-align: center;
	width: 100%;
	padding-top: 20px;
	color: ${props =>
		props.textWhite ? props.theme.white : props.theme.textBlack};
`

const CardHeading = styled.h4`
	z-index: ${props => props.theme.elementsAboveVideoZ};
	color: ${props =>
		props.textWhite ? props.theme.white : props.theme.textBlack};
	text-align: center;
	font-size: 20px;
	@media ${props => props.theme.mobileL} {
		font-size: 16px;
	}
`

const CardParagraph = styled.p`
	z-index: ${props => props.theme.elementsAboveVideoZ};
	color: ${props =>
		props.textWhite ? props.theme.white : props.theme.textBlack};
	font-size: 16px;
	padding: 0 20px;
	@media ${props => props.theme.mobileL} {
		font-size: 14px;
		padding: 0;
		text-align: center;
	}
`

const CardVideo = styled.video`
	width: 100%;
	position: absolute;
	z-index: ${props => props.theme.backgroundVideoZ};
	object-fit: cover;
	height: 100%;
	opacity: 0.4;
`

const Index = () => {
	const videoRef = React.createRef()

	useEffect(() => {
		videoRef.current.playbackRate = 0.4
	}, [])

	return (
		<React.Fragment>
			<Row>
				<VideoCard boxshadow>
					<CardVideo
						src={`${CDN}videos/engagement-rings-nb.mp4`}
						autoPlay
						muted
						loop
						ref={videoRef}
					/>
					<CardHeading textWhite>Welcome to Zavtin</CardHeading>
					<CardParagraph textWhite>
						One stop for all of the finest jewellery services
					</CardParagraph>
				</VideoCard>
			</Row>
			<Row>
				<SectionHeader>Our Services</SectionHeader>
			</Row>
			<Row>
				<Card round boxshadow>
					<CardHeading>Ready-Made Jewellery</CardHeading>
					<CardParagraph>
						Choose from our collection of ready-made jewellery.
					</CardParagraph>
				</Card>
				<Card round boxshadow>
					<CardHeading>Make to Order Jewellery</CardHeading>
					<CardParagraph>
						Choose from our collection of unique jewellery designs
						or provide us any design to have it made.
					</CardParagraph>
				</Card>
				<Card round boxshadow>
					<CardHeading>Precious & Semi Precious Stones</CardHeading>
					<CardParagraph>
						Purchase any gem stone. Diamonds, Rubies, Emeralds,
						Pearls, etc.
					</CardParagraph>
				</Card>
				<Card round boxshadow>
					<CardHeading>Gold & Silver</CardHeading>
					<CardParagraph>
						Purchase gold or silver from us. In weights of 1gm,
						10gms, etc. In shapes of coins, biscuits, etc.
					</CardParagraph>
				</Card>
				<Card round boxshadow inline>
					<CardHeading>Polishing</CardHeading>
					<CardParagraph>
						We polish your jewellery to make it look brand new.
					</CardParagraph>
				</Card>
				<Card round boxshadow inline>
					<CardHeading>Repairing</CardHeading>
					<CardParagraph>
						We fix broken, bent, missing parts, etc. of jewellery.
					</CardParagraph>
				</Card>
				<Card round boxshadow inline>
					<CardHeading>Sell Your Jewellery</CardHeading>
					<CardParagraph>
						Sell your jewellery to us for fair prices.
					</CardParagraph>
				</Card>
			</Row>
		</React.Fragment>
	)
}

export default connect()(withLayout(Index))
