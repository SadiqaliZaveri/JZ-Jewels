import { useRouter } from 'next/router'
import withLayout from '../../../components/Layout'
import GalleryItem from '../../../components/Gallery/GalleryItem'

const Index = () => {
	const router = useRouter()
	const { item } = router.query
	return (
		<GalleryItem item={item} />
	)
}

export default withLayout(Index)
