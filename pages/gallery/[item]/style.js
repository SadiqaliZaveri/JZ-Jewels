import styled from 'styled-components'

export const GalleryItemWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	padding: 24px;

	.image-gallery-slide-wrapper {
		border-radius: 20px;
		overflow: hidden;
	}

	.image-gallery:fullscreen {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 16px;
	}

	.image-gallery-thumbnail {
		width: 100%;
		max-width: 200px;
		min-width: 100px;
		border-radius: 10px;
		overflow: hidden;
		min-height: 144px;
		min-width: 192px;
		background-color: ${props => props.theme.gray};
	}

	.image-gallery-content {
		text-align: center;
	}

	@media ${props => props.theme.mobileL} {
		padding: 16px;

		.image-gallery-thumbnail {
			width: 100%;
			max-width: 120px;
			border-radius: 10px;
			overflow: hidden;
			min-height: 86px;
			min-width: 115px;
		}
	}
`

export default null
