import Link from 'next/link'
import Head from 'next/head'
import withLayout from '../../components/Layout'
import { CDN, galleryTitle, galleryDescription } from '../../helpers/constants'
import {
	GalleryWrapper,
	CategoryWrapper,
	CategoryHeading,
	CategoryItems,
	CardImgWrapper,
	CardImg
} from '../../styles/gallery/style'
import galleryData from '../../data/gallery.json'

const Index = () => (
	<GalleryWrapper>
		<Head>
			<title key="title">{galleryTitle}</title>
			<meta name="description" content={galleryDescription} />
		</Head>
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
