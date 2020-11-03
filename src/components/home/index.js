import React from 'react'
import { Button } from 'components/UI'
import { GlobalContainer } from 'store'

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
      <h1>
        This is Home, bro{' '}
        <span role="img" aria-label="emoji-chan">
          &#x1F92D;
        </span>
      </h1>
      <b>Your browser has {user_theme} theme active.</b>
      <Button.PrimaryBtn onClick={changeThemeHandler} userTheme={user_theme}>
        change theme
      </Button.PrimaryBtn>
    </React.Fragment>
  )
}
