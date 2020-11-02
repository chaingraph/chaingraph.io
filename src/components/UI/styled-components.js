import { Flex, Box } from 'rebass'
import styled, { themeGet } from 'utils/styles'
import { motion } from 'framer-motion'
import { getColors } from 'utils/utility'

const HeaderComponent = styled(Flex)`
  background-color: ${({ userTheme, hide }) => !hide ? 'transparent' : userTheme === 'light' ? '#fff' : '#151325'};
  position: sticky;
  transform: ${({ scroll, hide }) => scroll === true || !hide  ? 'translateY(0px)' : 'translateY(-109px)'};
  transition: transform 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) 50ms;
  z-index: 1500;
  width: 100%;
  top: -1px;
  left: 0;
`

const HeaderLogoContainer = styled(Box)`
  display: ${({ mobile }) => mobile ? 'block' : 'none'};

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    display: ${({ mobile }) => !mobile ? 'block' : 'none'};
  }
`

const HeaderMenuWrapper = styled(Flex)`
  padding: ${themeGet('space.2')}; 
  display: flex;
  margin: auto 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${({ userTheme }) => userTheme === 'light' ? '#111' : '#fff'};

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    display: none;
  }
`

const HeaderLinkCircle = styled.div`
  position: relative;
  display: ${({ mobile }) => mobile ? 'initial' : 'none'};

  > div.circle {
    position: absolute;
    width: 72px;
    height: 72px;
    background-color: ${({ userTheme }) => userTheme === 'light' ? '#2CD5C4' : '#911C81'};
    border-radius: 50%;
    right: 24px;
    top: -22px;
    transition: transform 0.33s cubic-bezier(0.785, 0.135, 0.15, 0.86) 25ms;
  }

  &:hover {
    > div.circle {
      transform: scale(1.15);
    }
  }

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    display: ${({ mobile }) => !mobile ? 'initial' : 'none'};
  }
`

const MobileMenuWrapper = styled(motion.aside)`
  background-color: ${({ userTheme }) => getColors('main', 'background', userTheme)};
  position: fixed;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  z-index: 1500;
  height: 100vh;
  padding: ${themeGet('space.6')} ${themeGet('space.4')};
  width: 100%;
  right: 0;
  top: 0;

  > button {
    position: absolute;
    right: 16px;
    top: 32px;
    margin: 0;
  }

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    display: none;
  }
`

const MobileMenuNavigation = styled(Flex)`
  height: 100%;
  width: 100%;
  position: relative;

  > nav {
    height: 100%;
    width: 100%;
    position: relative;
    align-items: flex-end;

    > div:not(:nth-of-type(2)) {
      height: 64px;
      margin-top: ${themeGet('space.4')};
    }
  }
`

export {
  HeaderComponent,
  HeaderLogoContainer,
  HeaderMenuWrapper,
  HeaderLinkCircle,
  MobileMenuWrapper,
  MobileMenuNavigation,
}
