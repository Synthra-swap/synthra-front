import { ButtonEmpty } from 'components/Button'
import { darken, lighten } from 'polished'
import styled from 'styled-components'
import { BREAKPOINTS } from 'theme'
import { colors } from 'theme/colors'
import { useIsDarkMode } from 'theme/components/ThemeToggle'

import meshSrc from './images/Mesh.png'

const Banner = styled.div<{ isDarkMode: boolean }>`
  height: 340px;
  width: 100%;
  border-radius: 32px;
  max-width: 1440px;
  margin: 80px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 32px 48px;

  box-shadow: 0px 10px 24px rgba(51, 53, 72, 0.04);

  background: ${({ isDarkMode, theme }) =>
    isDarkMode
      ? `url(${meshSrc}), linear-gradient(90deg, ${colors.blueVibrant} 0%, ${colors.purple300} 100%)`
      : `url(${meshSrc}), linear-gradient(90deg, ${darken(0.1, theme.accent1)} 0%, ${lighten(
          0.25,
          theme.accent1
        )} 100%);`};

  @media screen and (min-width: ${BREAKPOINTS.lg}px) {
    height: 140px;
    flex-direction: row;
  }
`

const TextContainer = styled.div`
  color: white;
  display: flex;
  flex: 1;
  flex-direction: column;
`

const HeaderText = styled.div`
  font-weight: 535;
  font-size: 28px;
  line-height: 36px;

  @media screen and (min-width: ${BREAKPOINTS.xl}px) {
    font-size: 28px;
    line-height: 36px;
  }
`

const DescriptionText = styled.div`
  margin: 10px 10px 0 0;
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;

  @media screen and (min-width: ${BREAKPOINTS.xl}px) {
    font-size: 20px;
    line-height: 28px;
  }
`

const BannerButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  transition: ${({ theme }) => `${theme.transition.duration.medium} ${theme.transition.timing.ease} opacity`};

  &:hover {
    opacity: 0.6;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}px) {
    width: auto;
  }
`

const BannerButton = styled(ButtonEmpty)`
  color: white;
  border: 1px solid white;
`

const ProtocolBanner = () => {
  const isDarkMode = useIsDarkMode()
  return (
    <Banner isDarkMode={isDarkMode}>
      <TextContainer>
        <HeaderText>Powered by the Synthra Protocol</HeaderText>
        <DescriptionText>
          The leading decentralized crypto trading protocol, governed by a global community.
        </DescriptionText>
      </TextContainer>
      <BannerButtonContainer>
        <BannerButton width="200px" as="a" href="https://synthra.org" rel="noopener noreferrer" target="_blank">
          Learn more
        </BannerButton>
      </BannerButtonContainer>
    </Banner>
  )
}

export default ProtocolBanner
