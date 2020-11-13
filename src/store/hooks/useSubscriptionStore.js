import { useReducer } from 'react'
import subscriptionReducer, {
  subscribeState,
} from 'store/reducer/subscription-action'
import { debug } from 'utils/utility'
import * as actions from 'store/actions'
import * as at from 'store/actions/action-types'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export const useSubscriptionStore = () => {
  const [state, dispatch] = useReducer(subscriptionReducer, subscribeState)
  const { modalOpen, msg: message, loading: s_loading, error: s_error } = state

  async function sendSubscriptionRequest(
    email,
    opt = {},
    active_debug = false,
  ) {
    const {
      subscriptionStart,
      subscriptionSuccess,
      subscriptionFail,
      modalControl,
    } = actions

    active_debug === true && debug(at.ADD_SUBSCRIPTION_START, {})
    dispatch(subscriptionStart())

    try {
      const { result, msg } = await addToMailchimp(email, opt)

      /* NOTE:
       * Returns a promise that resolves to the object that is returned by
       * Mailchimpʼs API. The Mailchimp API will always return a status of 200.
       * In order to know if your submission was a success or error,
       * we read the returned object, which has a result and msg property.
       */

      if (result === 'success') {
        active_debug === true &&
          debug(at.ADD_SUBSCRIPTION_SUCCESS, { email, result, msg })

        dispatch(subscriptionSuccess(msg))
        dispatch(modalControl(true))
      } else {
        active_debug === true &&
          debug(at.ADD_SUBSCRIPTION_FAIL, { catch: false, email, result, msg })

        dispatch(subscriptionFail(msg))
        dispatch(modalControl(true))
      }
    } catch (error) {
      active_debug === true &&
        debug(at.ADD_SUBSCRIPTION_FAIL, { catch: true, error })

      dispatch(subscriptionFail(error))
    }
  }

  function modalConfirm(active_debug = false) {
    const { modalControl } = actions
    active_debug === true && debug(at.MODAL_CONTROL, { modalOpen: false })

    modalControl(false)
  }

  return {
    sendSubscriptionRequest,
    modalConfirm,
    modalOpen,
    msg: message,
    s_loading,
    s_error,
  }
}
