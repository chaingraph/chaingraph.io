import PropTypes from "prop-types"
import React from "react"
import { Flex } from "rebass"
import { GlobalContainer } from "store"
import styled from 'utils/styles'
import { SvgIcon, Link, HeaderComponent, HeaderLogoContainer } from './index'

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

const Header = () => {
  const { height, scroll, user_theme } = GlobalContainer.useContainer()

  return (
    <HeaderComponent as="header" userTheme={user_theme} hide={height >= 108} scroll={height >= 108 && scroll}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1600px"
        height="108px"
        width={1}
        p={3}
        mx="auto"
      >
        <Flex
          alignItems="center"
          mr="auto"
        >
          <Link to="/" logo>
            <HeaderLogoContainer>
              <SvgIcon icon={`chaingraph_logo-${user_theme === 'light' ? 'l' : 'd'}`} size={[76, 76, 76, 76]} />
            </HeaderLogoContainer>
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
        <LinkCircle userTheme={user_theme}>
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
