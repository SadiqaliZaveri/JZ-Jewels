import { useRouter } from 'next/router'
import Head from 'next/head'
import withLayout from '../../../components/Layout'
import GalleryItem from '../../../components/Gallery/GalleryItem'
import { galleryTitle, galleryDescription } from '../../../helpers/constants'

const Index = () => {
	const router = useRouter()
	const { item } = router.query
	return (
		<React.Fragment>
			<Head>
				<title key="title">{galleryTitle}</title>
				<meta name="description" content={galleryDescription} />
			</Head>
			<GalleryItem item={item} />
		</React.Fragment>
	)
}

export default withLayout(Index)
