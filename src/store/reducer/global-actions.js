import Cookies from 'universal-cookie'
import { updateObject } from 'utils/utility'
import * as at from '../actions/action-types'

const initState = {
  user_theme: null,
  mobile: false,
  error: null,
  loading: false,
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
  const cookies = new Cookies()
  const user_theme = cookies.get('theme', { path: '/' })
  return updateObject(state, {
    error: null,
    loading: false,
    user_theme
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
    mobile
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
  }
}

export const globalState = {...initState}

export default reducer
