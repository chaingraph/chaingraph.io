import * as at from './action-types'

function subscriptionStart() {
  return {
    type: at.ADD_SUBSCRIPTION_START,
  }
}

function subscriptionSuccess(msg) {
  return {
    type: at.ADD_SUBSCRIPTION_SUCCESS,
    msg,
  }
}

function subscriptionFail(error) {
  return {
    type: at.ADD_SUBSCRIPTION_FAIL,
    error,
  }
}

function modalControl(state = false) {
  return {
    type: at.MODAL_CONTROL,
    modalOpen: state,
  }
}

export {
  subscriptionStart,
  subscriptionSuccess,
  subscriptionFail,
  modalControl,
}
