import { useReducer, useEffect, useCallback } from 'react'
import globalReducer, { globalState } from 'store/reducer/global-actions'
import { debug } from 'utils/utility'
import * as actions from 'store/actions'
import * as at from 'store/actions/action-types'

export const useGlobalStore = () => {
  const [state, dispatch] = useReducer(globalReducer, globalState)
  const {
    mobile,
    user_theme,
    height,
    yOffset,
    scroll,
    loading: g_loading,
    error: g_error,
  } = state

  const mobileStateHandler = (active_debug) => {
    const { innerWidth } = window
    const { mobileState, globalFail } = actions

    try {
      if (innerWidth <= 640 && !mobile) {
        active_debug && debug(at.MOBILE_STATE, { mobile, value: true })
        dispatch(mobileState(true))
      } else if (innerWidth > 640 && mobile) {
        active_debug && debug(at.MOBILE_STATE, { mobile, value: false })
        dispatch(mobileState(false))
      }
    } catch (error) {
      dispatch(globalFail(error))
    }
  }

  const scrollStateHandler = (active_debug) => {
    const { scrollY, pageYOffset } = window
    const { scrollState, scrollYOffset, scrollHeight, globalFail } = actions
    try {
      if (height !== scrollY) {
        active_debug && debug(at.SET_HEIGHT, { height, value: scrollY })
        dispatch(scrollHeight(scrollY))
      }

      if (yOffset > pageYOffset && !scroll) {
        active_debug && debug(at.SCROLL_STATE, { scroll, value: true })
        dispatch(scrollState(true))
      } else if (yOffset < pageYOffset && scroll) {
        active_debug && debug(at.SCROLL_STATE, { scroll, value: false })
        dispatch(scrollState(false))
      }

      active_debug && debug(at.SET_YOFFSET, { yOffset, value: pageYOffset })
      dispatch(scrollYOffset(pageYOffset))
    } catch (error) {
      dispatch(globalFail(error))
    }
  }

  const userThemeHandler = (active_debug) => {
    const { matchMedia } = window
    const { getUserTheme, setUserTheme, globalFail } = actions

    try {
      active_debug &&
        debug(at.GET_USER_THEME, { user_theme, value: user_theme })

      dispatch(getUserTheme())

      if (!user_theme) {
        const isDark = matchMedia('(prefers-color-scheme: dark)')
        active_debug &&
          debug(at.SET_USER_THEME, {
            user_theme,
            value: isDark ? 'dark' : 'light',
          })

        dispatch(setUserTheme(isDark ? 'dark' : 'light'))
      }
    } catch (error) {
      dispatch(globalFail(error))
    }
  }

  useEffect(() => {
    userThemeHandler()
    mobileStateHandler()
    scrollStateHandler()
  }, [])

  const mobileHandler = useCallback(mobileStateHandler, [mobile])
  const scrollHandler = useCallback(scrollStateHandler, [height, yOffset])

  useEffect(() => {
    window.addEventListener('resize', mobileHandler)
    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('resize', mobileHandler)
      window.removeEventListener('scroll', scrollHandler)
    }
  })

  const setUserThemeHandler = (theme, active_debug) => {
    const { setUserTheme, globalFail } = actions

    try {
      active_debug && debug(at.SET_USER_THEME, { user_theme, value: theme })
      dispatch(setUserTheme(theme))
    } catch (error) {
      dispatch(globalFail(error))
    }
  }

  return {
    mobileStateHandler,
    setUserThemeHandler,
    userThemeHandler,
    mobile,
    user_theme,
    scroll,
    height,
    yOffset,
    g_loading,
    g_error,
  }
}
