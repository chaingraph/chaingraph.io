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

function mobileState(state = false) {
  return {
    type: at.MOBILE_STATE,
    mobile: state
  }
}

export {
  globalStart,
  globalFail,
  getUserTheme,
  setUserTheme,
  mobileState
}