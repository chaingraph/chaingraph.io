import PropTypes from "prop-types"
import React from "react"
import { Box, Flex, Text } from "rebass"
import styled from 'utils/styles'
import { SvgIcon, Link } from './index'

const HeaderComponent = styled(Flex)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1500;
  background-color: ${({ userTheme }) => userTheme === 'light' ? '#fff' : '#151325'};
`

const LinkCircle = styled.div`
  position: relative;

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
`

const Header = ({ userTheme }) => (
  <HeaderComponent as="header" userTheme={userTheme}>
    <Flex
      justifyContent="space-between"
      alignItems="center"
      maxWidth="1600px"
      width={1}
      p={3}
      mx="auto"
    >
      <Flex
        alignItems="center"
        mr="auto"
      >
        <Link to="/" logo>
          <SvgIcon icon={`chaingraph_logo-${userTheme === 'light' ? 'l' : 'd'}`} size={[76, 76, 76, 76]} />
        </Link>
        <Link header
          fontSize={4}
          ml={5}
        >
          Beta
        </Link>
        <Link to="/#features" header
          fontSize={4}
          ml={5}
        >
          Features
        </Link>
      </Flex>
      <LinkCircle userTheme={userTheme}>
        <div className="circle" />
        <Link header
          fontSize={4}
          ml={5}
        >
          Join github
        </Link>
      </LinkCircle>
    </Flex>
  </HeaderComponent>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
