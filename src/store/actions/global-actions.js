import Cookies from 'universal-cookie'
import * as at from './action-types'

function globalStart() {
  return {
    type: at.GLOBAL_STATE_START,
  }
}

function globalFail() {
  return {
    type: at.GLOBAL_STATE_FAIL,
  }
}

function getUserTheme() {
  return {
    type: at.GET_USER_THEME,
  }
}

function setUserTheme(theme) {
  const cookies = new Cookies()
  const user_theme = theme
  cookies.set('theme', theme, { path: '/' })
  return {
    type: at.GET_USER_THEME,
    user_theme
  }
}

function mobileState(mobile = false) {
  return {
    type: at.MOBILE_STATE,
    mobile
  }
}

function scrollState(scroll = false) {
  return {
    type: at.SCROLL_STATE,
    scroll
  }
}

function scrollHeight(height) {
  return {
    type: at.SET_HEIGHT,
    height
  }
}

function scrollYOffset(yOffset) {
  return {
    type: at.SET_YOFFSET,
    yOffset
  }
}

export {
  globalStart,
  globalFail,
  getUserTheme,
  setUserTheme,
  mobileState,
  scrollState,
  scrollHeight,
  scrollYOffset,
}