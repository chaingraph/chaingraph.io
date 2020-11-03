import React from 'react'
import { Button } from 'components/UI'
import { GlobalContainer } from 'store'
import { Blockchain } from './blockchain'
import { Flex } from 'rebass'

export function Home() {
  const { setUserThemeHandler, user_theme } = GlobalContainer.useContainer()

  function changeThemeHandler() {
    if (user_theme === 'light') {
      setUserThemeHandler('dark', false)
    } else {
      setUserThemeHandler('light', false)
    }
  }

  return (
    <React.Fragment>
      <Flex width={1} alignItems="center" justifyContent="space-between">
        <h1>
          This is Home, bro{' '}
          <span role="img" aria-label="emoji-chan">
            &#x1F92D;
          </span>
        </h1>
        <Blockchain />
      </Flex>
      <b>Your browser has {user_theme} theme active.</b>
      <Button.PrimaryBtn onClick={changeThemeHandler} userTheme={user_theme}>
        change theme
      </Button.PrimaryBtn>
    </React.Fragment>
  )
}
