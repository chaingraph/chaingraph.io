import Cookies from 'universal-cookie/es6'
import * as at from './action-types'

export const globalStart = () => ({
  type: at.GLOBAL_STATE_START,
})

export const globalFail = () => ({
  type: at.GLOBAL_STATE_FAIL,
})

export const getUserTheme = () => ({
  type: at.GET_USER_THEME,
})

export const setUserTheme = (theme) => {
  const cookies = new Cookies()
  const user_theme = theme
  cookies.set('theme', theme, { path: '/' })
  return {
    type: at.GET_USER_THEME,
    user_theme,
  }
}

export const mobileState = (mobile = false) => ({
  type: at.MOBILE_STATE,
  mobile,
})

export const scrollState = (scroll = false) => ({
  type: at.SCROLL_STATE,
  scroll,
})

export const scrollHeight = (height) => ({
  type: at.SET_HEIGHT,
  height,
})

export const scrollYOffset = (yOffset) => ({
  type: at.SET_YOFFSET,
  yOffset,
})
