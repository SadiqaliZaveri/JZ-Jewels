import styled from 'styled-components'

export const GalleryArrowWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	pointer-events: ${props => props.disabled ? 'none' : ''};
	background-color: ${props => props.disabled ? props.theme.gray : props.theme.white};
	opacity: ${props => props.disabled ? 0.3 : 1};
	width: 40px;
	height: 40px;
	position: absolute;
	top: calc(50% - 20px);
	border-radius: 20px;
	right:  ${props => props.isRight ? 0 : ''};
	left:  ${props => !props.isRight ? 0 : ''};
	z-index: ${props => props.theme.aboveItem};
	margin: 0 12px;
	font-size: 24px;
	font-weight: bold;
	color: ${props => props.theme.textBlack};

	&:hover {
		transform: scale(1.05);
	}

	@media ${props => props.theme.mobileL} {
		display: none;
	}
`

export default null
