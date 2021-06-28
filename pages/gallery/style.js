import styled from 'styled-components'

export const GalleryWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 24px;
`
export const CategoryWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: white;
	margin-bottom: 24px;
	padding-bottom: 24px;
	box-shadow: 0 2px 6px 0px ${props => props.theme.boxShadow};
`

export const CategoryHeading = styled.div`
	position: sticky;
	top: 75px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 24px;
	font-weight: bold;
	text-transform: capitalize;
	margin: 0 12px 0 12px;
	padding: 24px 0;
	background-color: ${props => props.theme.white};
	width: 100%;
	z-index: ${props => props.theme.aboveItem};
	box-shadow: 0 0 2px 0px ${props => props.theme.boxShadow};
	color: ${props => props.theme.textBlack};
`

export const CategoryItems = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`

export const CardImgWrapper = styled.div`
	display: flex;
	background-color: ${props => props.theme.gray};
	min-width: 328px;
	max-width: 451px;
	min-height: 246px;
	margin: 24px 12px 0 12px;
	border-radius: 20px;
	overflow: hidden;
	cursor: pointer;
	transition: all ease 0.2s;

	&:hover {
		transform: scale(1.02);
	}

	@media ${props => props.theme.mobileL} {
		margin: 24px 16px 0 16px;
		border-radius: 10px;
	}

`

export const CardImg = styled.img`
	width: 100%;
	object-fit: contain;
`

export default null
