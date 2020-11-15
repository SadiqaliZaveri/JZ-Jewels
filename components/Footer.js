import styled from 'styled-components'
import Link from 'next/link'

const FooterWrapper = styled.div`
	display: flex;
	height: auto;
	background-color: ${props => props.theme.white};
	align-items: center;
	justify-content: center;
	z-index: ${props => props.theme.HeaderZ};
	user-select: none;
	overflow: hidden;
`
const FooterContainer = styled.div`
	display: flex;
	width: 100%;
	max-width: ${props => props.theme.wrapperMaxWidth};
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

const LogoWrapper = styled.div`
	display: flex;
	flex: 1;
	padding: 20px 0;
	width: 100%;
	border-top: 1px solid ${props => props.theme.border};
	justify-content: center;
`
const Logo = styled.img`
	width: 140px;
	cursor: pointer;
`
const SectionWrapper = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 16px 0;
	&:last-child {
		border-bottom: 0px;
	}
	@media ${props => props.theme.mobileL} {
		flex-direction: column;
	}
`

const InfoWrapper = styled.div`
	display: flex;
	justify-content: center;
`
const InfoContainer = styled.div`
	padding: 0 20px;
`
const InfoHeading = styled.div`
	text-align: center;
`
const InfoAnchorContainer = styled.div`
	display: flex;
	margin: 12px 0;
	justify-content: center;
`
const InfoAnchor = styled.a`
	color: ${props => props.theme.link};
	&:hover {
		color: ${props => props.theme.linkHover};
	}
`

const TermsWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`

const TermsAnchor = styled.a`
	cursor: pointer;
	color: ${props => props.theme.link};
	text-decoration: underline;
	&:hover {
		color: ${props => props.theme.linkHover};
	}
`

const CopyrightContainer = styled.div`
	display: flex;
	justify-content: center;
	width: calc(100% - 40px);
	font-size: 12px;
	padding: 0 20px;
	text-align: center;
	@media ${props => props.theme.mobileL} {
		font-size: 8px;
	}
`

const Footer = () => {
	return (
		<FooterWrapper>
			<FooterContainer>
				<LogoWrapper>
					<Link href="/" prefetch={false}>
						<Logo
							src="/images/icons/zavtin-horizontal.png"
							alt="Logo"
						/>
					</Link>
				</LogoWrapper>
				<SectionWrapper>
					<TermsWrapper>
						<TermsAnchor href="/terms-and-conditions">
							Terms and Conditions
						</TermsAnchor>
					</TermsWrapper>
				</SectionWrapper>
				<SectionWrapper>
					<InfoWrapper>
						<InfoContainer>
							<InfoHeading>Contact Details</InfoHeading>
							<InfoAnchorContainer>
								<InfoAnchor href="tel: +919820062432">
									Jerjis - Tel: +919820062432
								</InfoAnchor>
							</InfoAnchorContainer>
							<InfoAnchorContainer>
								<InfoAnchor href="tel: +919930757552">
									Sadiqali - Tel: +919930757552
								</InfoAnchor>
							</InfoAnchorContainer>
							<InfoAnchorContainer>
								<InfoAnchor href="tel: +919930757552">
									Murtaza - Tel: +918898524999
								</InfoAnchor>
							</InfoAnchorContainer>
							<InfoAnchorContainer>
								<InfoAnchor
									title="Send mail to support@zavtin.com"
									href="mailto: support@zavtin.com"
								>
									support@zavtin.com
								</InfoAnchor>
							</InfoAnchorContainer>
						</InfoContainer>
					</InfoWrapper>
				</SectionWrapper>
				<SectionWrapper>
					<CopyrightContainer>
						Copyright 2020 © Zavtin Jewellers (OPC) Pvt. Ltd. All
						Rights Reserved.
					</CopyrightContainer>
				</SectionWrapper>
			</FooterContainer>
		</FooterWrapper>
	)
}

export default Footer
