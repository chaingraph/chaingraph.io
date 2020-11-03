import React from 'react'
import { GlobalContainer } from 'store'
import { Icon } from './icon'
import {
  HeaderMenuWrapper,
  MobileMenuNavigation,
  MobileMenuWrapper,
} from './styled-components'

export function MobileMenu({ active, setActive, children }) {
  const { user_theme } = GlobalContainer.useContainer()

  function resetActiveHandler() {
    setActive((a) => !a)
  }

  return (
    <MobileMenuWrapper
      animate={
        active
          ? {
            x: '0%',
          }
          : {
            x: '100%',
          }
      }
      initial={
        active && {
          x: '100%',
        }
      }
      transition={{
        ease: 'linear',
      }}
      userTheme={user_theme}
    >
      <HeaderMenuWrapper
        as="button"
        aria-labelledby="menu_close-button-action"
        alignItems="center"
        justifyContent="center"
        userTheme={user_theme}
        onClick={resetActiveHandler}
      >
        <Icon.close size="32px" />
      </HeaderMenuWrapper>
      <MobileMenuNavigation
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="flex-start"
      >
        {children}
      </MobileMenuNavigation>
    </MobileMenuWrapper>
  )
}
