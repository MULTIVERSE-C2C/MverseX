import { Trans } from '@lingui/macro'
import { LARGE_MEDIA_BREAKPOINT, SMALL_MOBILE_MEDIA_BREAKPOINT } from 'components/Tokens/constants'
import { Box } from 'nft/components/Box'
import { bodySmall, subhead } from 'nft/css/common.css'
import { X } from 'react-feather'
// import { Link } from 'react-router-dom'
import { useHideNftPromoBanner } from 'state/user/hooks'
import styled from 'styled-components/macro'
import { ExternalLink } from 'theme/components'
import { Z_INDEX } from 'theme/zIndex'

import Logo from '../../../assets/svg/logo.svg'
// import nftPromoImage1 from '../nftExploreBanner/nftArt1.png'
// import nftPromoImage2 from '../nftExploreBanner/nftArt2.png'
// import nftPromoImage3 from '../nftExploreBanner/nftArt3.png'


const Link = styled(ExternalLink)`
  color: ${({ theme }) => theme.accentActive};
  stroke: ${({ theme }) => theme.accentActive};
`
// function getRandom(list: any[]) {
//   return list[Math.floor(Math.random() * list.length)]
// }
// const randomizedNftImage = getRandom([nftPromoImage1, nftPromoImage2, nftPromoImage3])

const PopupContainer = styled.div<{ show: boolean }>`
  background-color: ${({ theme }) => theme.backgroundSurface};
  box-shadow: ${({ theme }) => theme.deepShadow};
  border: 1px solid ${({ theme }) => theme.backgroundOutline};
  border-radius: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.textPrimary};
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  right: clamp(0px, 1vw, 16px);
  z-index: ${Z_INDEX.sticky};
  transition: ${({
    theme: {
      transition: { duration, timing },
    },
  }) => `${duration.slow} opacity ${timing.in}`};
  width: 98vw;
  bottom: 55px;
  @media screen and (min-width: ${LARGE_MEDIA_BREAKPOINT}) {
    bottom: 48px;
  }
  @media screen and (min-width: ${SMALL_MOBILE_MEDIA_BREAKPOINT}) {
    width: 391px;
  }
  :hover {
    border: double 1px transparent;
    border-radius: 12px;
    background-image: ${({ theme }) =>
      `linear-gradient(${theme.backgroundSurface}, ${theme.backgroundSurface}), 
      radial-gradient(circle at top left, hsla(299, 100%, 87%, 1), hsla(299, 100%, 61%, 1))`};
    background-origin: border-box;
    background-clip: padding-box, border-box;
  }
`

const InnerContainer = styled.div`
  overflow: hidden;
  display: flex;
  position: relative;
  gap: 8px;
  padding: 12px;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
`

const StyledXButton = styled(X)`
  color: ${({ theme }) => theme.textSecondary};
  &:hover {
    opacity: ${({ theme }) => theme.opacity.hover};
  }
  &:active {
    opacity: ${({ theme }) => theme.opacity.click};
  }
`

const StyledImageContainer = styled(Box)`
  width: 20%;
  cursor: pointer;
  aspectratio: 1;
  transition: transform 0.25s ease 0s;
  object-fit: contain;
`

// const LinkStyle = css`
//   color: ${({ theme }) => theme.accentActive};
//   stroke: ${({ theme }) => theme.accentActive};
// `

// const StyledLink = styled(Link)`
//   ${ClickableStyle}
//   ${LinkStyle}
// `

export default function NftExploreBanner() {
  const [hideNftPromoBanner, toggleHideNftPromoBanner] = useHideNftPromoBanner()
  // const navigate = useNavigate()

  // const navigateToNfts = () => {
  //   navigate('/nfts')
  //   toggleHideNftPromoBanner()
  // }

  return (
    <PopupContainer show={!hideNftPromoBanner}>
      <InnerContainer>
        <StyledImageContainer as="img" src={Logo} draggable={false} />
        <TextContainer>
          {/* <HeaderText> */}
          <div className={subhead}>
            <Trans>MverseX</Trans>
          </div>
          {/* </HeaderText> */}

          {/* <Description> */}
          <div className={bodySmall}>
            <Trans>The Future of crypto starts with us.</Trans>{' '}
            <Link href="https://multiverse.fntokens.xyz" title="MverseX Website">
              <Trans>Learn more!</Trans>
            </Link>{' '}
          </div>
        </TextContainer>
        {/* </Description> */}
        <StyledXButton
          size={20}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            toggleHideNftPromoBanner()
          }}
        />
      </InnerContainer>
    </PopupContainer>
  )
}
