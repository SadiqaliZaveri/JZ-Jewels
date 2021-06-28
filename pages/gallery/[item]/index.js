import { useRouter } from 'next/router'
import ImageGallery from 'react-image-gallery'
import withLayout from '../../../components/Layout'
import {
	GalleryItemWrapper,
} from './style'
import itemData from './item.json'
import GallerlyItem from '../../../components/Gallery/GalleryItem'
import GalleryArrow from '../../../components/Gallery/GalleryArrow'
import 'react-image-gallery/styles/css/image-gallery.css'
import { genericNotFound } from '../../../helpers/constants'

const Index = () => {
	const router = useRouter()
	const { item } = router.query
	return (
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
						renderItem={GallerlyItem}
						renderLeftNav={(onClick, disabled) => GalleryArrow(onClick, disabled, false)}
						renderRightNav={(onClick, disabled) => GalleryArrow(onClick, disabled, true)}
					/> : genericNotFound

			}
		</GalleryItemWrapper>
	)
}

export default withLayout(Index)
