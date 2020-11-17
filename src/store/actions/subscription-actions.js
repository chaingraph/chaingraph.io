import * as at from './action-types'

export const subscriptionStart = () => ({
  type: at.ADD_SUBSCRIPTION_START,
})

export const subscriptionSuccess = (msg) => ({
  type: at.ADD_SUBSCRIPTION_SUCCESS,
  msg,
})

export const subscriptionFail = (error) => ({
  type: at.ADD_SUBSCRIPTION_FAIL,
  error,
})

export const modalControl = (state = false) => ({
  type: at.MODAL_CONTROL,
  modalOpen: state,
})
