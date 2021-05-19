/* eslint-disable no-nested-ternary */
import React from 'react'
import { Flex, Box, Text } from 'rebass'
import styled, { themeGet } from 'utils/styles'
import { motion } from 'framer-motion'
import { getColors } from 'utils/utility'

const HeaderComponent = styled(Flex)`
  background-color: ${({ userTheme, hide }) =>
    !hide ? 'transparent' : userTheme === 'light' ? '#fff' : '#151325'};
  position: sticky;
  transform: ${({ scroll, hide }) =>
    scroll === true || !hide ? 'translateY(0px)' : 'translateY(-109px)'};
  transition: transform 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) 50ms;
  z-index: 1500;
  width: 100%;
  top: -1px;
  left: 0;
`

const HeaderLogoContainer = styled(Box)`
  display: ${({ mobile }) => (mobile ? 'block' : 'none')};

  @media screen and (min-width: ${themeGet('breakpoints.1')}) {
    display: ${({ mobile }) => (!mobile ? 'block' : 'none')};
  }
`

const HeaderMenuWrapper = styled(Flex)`
  display: flex;
  margin: auto 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${({ userTheme }) => (userTheme === 'light' ? '#111' : '#fff')};

  @media screen and (min-width: ${themeGet('breakpoints.1')}) {
    display: none;
  }
`

const HeaderLinkCircle = styled.div`
  position: relative;
  display: ${({ mobile }) => (mobile ? 'initial' : 'none')};

  > div.circle {
    position: absolute;
    width: 72px;
    height: 72px;
    background-color: ${({ userTheme }) =>
    userTheme === 'light' ? '#2CD5C4' : '#911C81'};
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

  @media screen and (min-width: ${themeGet('breakpoints.1')}) {
    display: ${({ mobile }) => (!mobile ? 'initial' : 'none')};
  }
`

const MobileMenuWrapper = styled(motion.aside)`
  background-color: ${({ userTheme }) =>
    getColors('main', 'background', userTheme)};
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

  @media screen and (min-width: ${themeGet('breakpoints.1')}) {
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

const Title = styled(Text)`
  text-transform: capitalize;
  text-shadow: 0px 5px 80px rgba(255, 255, 255, 0.51);
`

const ThemeBtnWrapper = styled.span`
  position: absolute;
  right: 32px;
  top: 32px;
`

const ContentWrapper = ({ children, ...rest }) => {
  return (
    <Box p={[0, 4, 0]} width={[1, 1, 1 / 2]} maxWidth={720} {...rest}>
      {children}
    </Box>
  )
}

const Grid = styled(Box)`
  width: 100%;
  margin-bottom: 40px;
  column-count: 1;
  column-gap: 1rem;
  column-fill: auto;
  grid-template-columns: repeat(1, 1fr);
  display: grid;

  @media (min-width: ${themeGet('breakpoints.0')}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${themeGet('breakpoints.2')}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${themeGet('breakpoints.3')}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const CardWrapper = styled(motion.div)`
  width: 280px;
  height: 335px;
  position: relative;
  z-index: 1;
  transition: fill 0.15s cubic-bezier(0.785, 0.135, 0.15, 0.86);
`
const CardContainer = styled(Flex)``

export {
  HeaderComponent,
  HeaderLogoContainer,
  HeaderMenuWrapper,
  HeaderLinkCircle,
  MobileMenuWrapper,
  MobileMenuNavigation,
  ContentWrapper,
  CardWrapper,
  CardContainer,
  ThemeBtnWrapper,
  Title,
  Grid,
}
