import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { CSSTransition } from 'react-transition-group'
import Sidebar from './Sidebar'

const HeaderWrapper = styled.div`
	position: sticky;
	display: flex;
	height: 60px;
	top: 0;
	background-color: ${props => props.theme.white};
	align-items: center;
	padding: 8px 16px;
	box-shadow: 0 0px 8px 0px ${props => props.theme.gray};
	justify-content: center;
	z-index: ${props => props.theme.headerZ};
	user-select: none;
`
const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: ${props => props.theme.wrapperMaxWidth};
`
const LogoWrapper = styled.div`
	display: flex;
	height: 20px;
`
const Logo = styled.img`
	cursor: pointer;
	height: 100%;
`
const MenuWrapper = styled.div`
	display: flex;
	align-items: center;
`
const MenuItem = styled.div`
	display: flex;
	padding: 10px 20px;
	cursor: pointer;
	&:hover {
		@media ${props => props.theme.desktopL} {
			transform: scale(1.1);
		}
	}
`

const Header = () => {
	const [activeMenu, setActiveMenu] = useState(false)

	return (
		<HeaderWrapper>
			<HeaderContainer>
				<LogoWrapper>
					<Link href="/" prefetch={false}>
						<Logo
							src="/images/icons/crafted-jewellers-logo-594x60.png"
							alt="Logo"
						/>
					</Link>
				</LogoWrapper>
				<MenuWrapper>
					<Link href="/" prefetch={false}>
						<MenuItem>Home</MenuItem>
					</Link>
					<MenuItem onClick={() => setActiveMenu(!activeMenu)}>
						Products
					</MenuItem>
				</MenuWrapper>
				<CSSTransition
					in={activeMenu}
					classNames="fade"
					timeout={300}
					unmountOnExit
					mountOnEnter
				>
					<Sidebar closeSidebar={setActiveMenu} />
				</CSSTransition>
			</HeaderContainer>
		</HeaderWrapper>
	)
}

export default Header
