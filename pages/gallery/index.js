import Link from 'next/link'
import withLayout from '../../components/Layout'
import { CDN } from '../../helpers/constants'
import {
	GalleryWrapper,
	CategoryWrapper,
	CategoryHeading,
	CategoryItems,
	CardImgWrapper,
	CardImg
} from './style'
import galleryData from './gallery.json'

const Index = () => (
	<GalleryWrapper>
		{
			Object.keys(galleryData).map(key => (
				<CategoryWrapper key={key}>
					<CategoryHeading id={key}>{key}</CategoryHeading>
					<CategoryItems>
						{
							galleryData[key].map(ring => (
								<Link key={ring.name} href={`/gallery/${ring.name}`} prefetch={false}>
									<CardImgWrapper>
										<CardImg
											data-src={`${CDN}${ring.url}`}
											alt={ring.name}
											className="lazyload"
										/>
									</CardImgWrapper>
								</Link>
							))
						}
					</CategoryItems>
				</CategoryWrapper>
			))
		}
	</GalleryWrapper>
)

export default withLayout(Index)