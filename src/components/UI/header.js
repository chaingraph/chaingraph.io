import React from 'react'
import { Flex } from 'rebass'
import { GlobalContainer } from 'store'
import {
  HeaderComponent,
  HeaderMenuWrapper,
  Icon,
  NavigationItems,
} from './index'

export function Header({ mobileMenu }) {
  const { height, scroll, user_theme } = GlobalContainer.useContainer()

  return (
    <HeaderComponent
      as="header"
      userTheme={user_theme}
      hide={height >= 64}
      scroll={height >= 64 && scroll}
      flexDirection="row"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1440px"
        height={[72, 108]}
        width={1}
        p={3}
        mx="auto"
      >
        <NavigationItems header />
        {user_theme ? (
          <HeaderMenuWrapper
            as="button"
            aria-labelledby="menu_open-button-action"
            alignItems="center"
            justifyContent="center"
            userTheme={user_theme}
            onClick={mobileMenu}
          >
            <Icon.menu size="32px" />
          </HeaderMenuWrapper>
        ) : (
          <></>
        )}
      </Flex>
    </HeaderComponent>
  )
}
