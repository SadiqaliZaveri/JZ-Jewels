import styled from 'styled-components'

export const GalleryImageWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 720px;
	min-height: 540px;
	width: 100%;
	background-color: ${props => props.theme.gray};

	@media ${props => props.theme.mobileL} {
		min-width: 328px;
		min-height: 246px;
	}
`

export const GalleryImage = styled.img`
	width: 100%;
	max-width: 800px;
	object-fit: contain;
`
