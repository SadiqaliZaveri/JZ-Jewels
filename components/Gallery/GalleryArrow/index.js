import {
	GalleryArrowWrapper
} from './style'

const GalleryArrow = (onClick, disabled, isRight) => (
	<GalleryArrowWrapper onClick={onClick} disabled={disabled} isRight={isRight}>
		{
			isRight ? '>' : '<'
		}
	</GalleryArrowWrapper>
)

export default GalleryArrow
