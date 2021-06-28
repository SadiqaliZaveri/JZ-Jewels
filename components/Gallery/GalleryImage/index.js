import {
	GalleryImageWrapper,
	GalleryImage
} from './style'

const GalleryItem = (item) => (
	<GalleryImageWrapper>
		<GalleryImage data-src={item.original} className="lazyload" />
	</GalleryImageWrapper>
)

export default GalleryItem
