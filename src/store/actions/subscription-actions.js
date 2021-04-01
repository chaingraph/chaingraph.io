import * as at from './action-types'

export const subscriptionStart = () => ({
  type: at.ADD_SUBSCRIPTION_START,
})

export const subscriptionSuccess = (msg, title) => ({
  type: at.ADD_SUBSCRIPTION_SUCCESS,
  msg,
  title,
})

export const subscriptionFail = (msg, title) => ({
  type: at.ADD_SUBSCRIPTION_FAIL,
  msg,
  title,
})

export const modalControl = (state = false) => ({
  type: at.MODAL_CONTROL,
  modalOpen: state,
})
