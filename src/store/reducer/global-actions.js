/* eslint-disable no-unused-vars */
import Cookies from 'universal-cookie/es6'
import { updateObject } from 'utils/utility'
import * as at from '../actions/action-types'

const cookies = new Cookies()

const initState = {
  user_theme: cookies.get('theme', { path: '/' }),
  mobile: false,
  error: null,
  loading: false,
  scroll: false,
  yOffset: 0,
  height: 0,
}

const start = (state, action) =>
  updateObject(state, {
    error: null,
    loading: true,
  })

const fail = (state, { error }) =>
  updateObject(state, {
    error,
    loading: false,
  })

const getUserTheme = (state, action) => {
  const user_theme = cookies.get('theme', { path: '/' })
  return updateObject(state, {
    error: null,
    loading: false,
    user_theme,
  })
}

const setUserTheme = (state, { user_theme }) =>
  updateObject(state, {
    user_theme,
    error: null,
    loading: false,
  })

const mobileState = (state, { mobile }) =>
  updateObject(state, {
    mobile,
  })

const scrollState = (state, { scroll }) =>
  updateObject(state, {
    scroll,
  })

const scrollHeight = (state, { height }) =>
  updateObject(state, {
    height,
  })

const scrollYOffset = (state, { yOffset }) =>
  updateObject(state, {
    yOffset,
  })

const reducer = (state = initState, action) => {
  switch (action.type) {
    case at.GLOBAL_STATE_START:
      return start(state, action)
    case at.GLOBAL_STATE_FAIL:
      return fail(state, action)
    case at.GET_USER_THEME:
      return getUserTheme(state, action)
    case at.SET_USER_THEME:
      return setUserTheme(state, action)
    case at.MOBILE_STATE:
      return mobileState(state, action)
    case at.SCROLL_STATE:
      return scrollState(state, action)
    case at.SET_HEIGHT:
      return scrollHeight(state, action)
    case at.SET_YOFFSET:
      return scrollYOffset(state, action)
    default:
      return state
  }
}

export const globalState = { ...initState }

export default reducer
