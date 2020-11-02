import React from 'react'
import { Flex } from 'rebass'
import { GlobalContainer } from 'store'
import { SvgIcon, Link, HeaderLogoContainer, HeaderLinkCircle } from './index'

const NavigationItems = ({ mobile = false }) => {
  const { user_theme } = GlobalContainer.useContainer()

  return (
    <React.Fragment>
      <Flex as="nav"
        flexDirection={mobile ? 'column' : 'row'}
        alignItems="center"
        mr="auto"
      >
        <HeaderLogoContainer>
          <Link to="/" logo>
            <SvgIcon icon={`chaingraph_logo-${user_theme === 'light' ? 'l' : 'd'}`} size={[76, 76, 76, 76]} />
          </Link>
        </HeaderLogoContainer>
        <HeaderLogoContainer mobile>
          <Link to="/" logo>
            <SvgIcon icon={`chaingraph_logo-${user_theme === 'light' ? 'l' : 'd'}-m`} />
          </Link>
        </HeaderLogoContainer>
        <Link
          header
          mobile={mobile}
          fontSize={4}
          ml={5}
        >
          Beta
        </Link>
        <Link to="/#features" 
          header
          mobile={mobile}
          fontSize={4}
          ml={5}
        >
          Features
        </Link>
      </Flex>
      <HeaderLinkCircle 
        mobile={mobile}
        userTheme={user_theme}
      >
        <div className="circle" />
        <Link header
          mobile={mobile}
          fontSize={4}
          ml={5}
        >
          Join github
        </Link>
      </HeaderLinkCircle>
    </React.Fragment>
  )
}

export default NavigationItems
