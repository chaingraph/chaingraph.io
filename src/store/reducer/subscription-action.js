/* eslint-disable no-unused-vars */
import { updateObject } from 'utils/utility'
import * as at from 'store/actions/action-types'

const initState = {
  loading: false,
  error: null,
  modalOpen: false,
  msg: '',
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

const subscriptionSuccess = (state, { msg }) =>
  updateObject(state, {
    loading: false,
    msg,
  })

const modalControl = (state, { modalOpen }) => {
  const control = modalOpen
    ? {
      modalOpen,
    }
    : {
      loading: false,
      error: null,
      modalOpen,
      msg: '',
    }
  return updateObject(state, control)
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case at.ADD_SUBSCRIPTION_START:
      return start(state, action)
    case at.ADD_SUBSCRIPTION_FAIL:
      return fail(state, action)
    case at.ADD_SUBSCRIPTION_SUCCESS:
      return subscriptionSuccess(state, action)
    case at.MODAL_CONTROL:
      return modalControl(state, action)
    default:
      return state
  }
}

export const subscribeState = { ...initState }

export default reducer
