import ImageGallery from 'react-image-gallery'
import styled from 'styled-components'
import { string } from 'prop-types'
import 'react-image-gallery/styles/css/image-gallery.css'
import itemData from '../../../data/item.json'
import GalleryArrow from '../GalleryArrow'
import GalleryImage from '../GalleryImage'
import { genericNotFound } from '../../../helpers/constants'

const GalleryItemWrapper = styled.div`
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

const GalleryItem = ({ item }) => (
	<GalleryItemWrapper>
		{
			itemData.[item] ?
				<ImageGallery
					items={itemData.[item].images}
					infinite={false}
					autoPlay={false}
					thumbnailPosition='bottom'
					showPlayButton={false}
					showBullets={false}
					renderItem={GalleryImage}
					renderLeftNav={(onClick, disabled) => GalleryArrow(onClick, disabled, false)}
					renderRightNav={(onClick, disabled) => GalleryArrow(onClick, disabled, true)}
				/> : genericNotFound

		}
	</GalleryItemWrapper>
)

GalleryItem.propTypes = {
	item: string.isRequired
}

export default GalleryItem
