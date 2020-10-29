import { useReducer, useEffect } from 'react'
import { createContainer } from 'unstated-next'
import globalReducer, { globalState } from './reducer/global-actions'
import * as actions from './actions'
import * as at from './actions/action-types'

function debug(type, value) {
  if (process.env.NODE_ENV === 'development')
    console.info(
      '|| ACTION_EXECUTED ||\n—————————————————————\n',
      { type, ...value }
    )
}

const useGlobalStore = () => {
  const [state, dispatch] = useReducer(globalReducer, globalState)
  const {
    mobile,
    user_theme,
    loading: g_loading,
    error: g_error,
  } = state

  useEffect(() => {
    userThemeHandler()
    window.addEventListener('resize', mobileStateHandler)

    return () => window.removeEventListener('resize', mobileStateHandler)
  }, [])

  function mobileStateHandler(active_debug = false) {
    const { innerWidth } = window
    const { mobileState } = actions

    if (innerWidth <= 640) {
      active_debug && debug(at.MOBILE_STATE, { mobile, value: true })
      dispatch(actions.mobileState(true))
    } else {
      active_debug && debug(at.MOBILE_STATE, { mobile, value: false })
      dispatch(mobileState(false))
    }
  }

  function userThemeHandler(active_debug = false) {
    const { matchMedia } = window
    const { getUserTheme, setUserTheme } = actions
    
    active_debug && debug(at.GET_USER_THEME, { user_theme, value: user_theme })
    
    dispatch(getUserTheme())
    
    if (!user_theme) {
      const isDark = matchMedia('(prefers-color-scheme: dark)')
      active_debug && debug(at.SET_USER_THEME, { user_theme, value: isDark ? 'dark' : 'light' })

      dispatch(setUserTheme(isDark ? 'dark' : 'light'))
    }
  }

  function setUserThemeHandler(theme, active_debug = false) {
    const { setUserTheme } = actions
    
    active_debug && debug(at.SET_USER_THEME, { user_theme, value: theme })

    dispatch(setUserTheme(theme))
  }

  return {
    mobileStateHandler,
    setUserThemeHandler,
    userThemeHandler,
    mobile,
    user_theme,
    g_loading,
    g_error
  }
}

export const GlobalContainer = createContainer(useGlobalStore)
